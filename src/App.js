import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./App.css";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
//User to enter city and country code api.openweathermap.org/data/2.5/weather?q={city name},{country code}
const API_KEY2 = process.env.REACT_APP_API_KEY2;
//"http://dataservice.accuweather.com/locations/v1/cities/{country}/search?apikey={apikey}&q={city}"

class App extends React.Component {
  state = {
    allResults: [
      {
        id: 0,
        description: "Weather",
        result: undefined
      },
      {
        id: 1,
        description: "Description",
        result: undefined
      },
      {
        id: 2,
        description: "High",
        result: undefined
      },
      {
        id: 3,
        description: "Low",
        result: undefined
      },
      {
        id: 4,
        chartData: {
          labels: ["Boston", "Worcester"],
          datasets: [
            {
              label: "Population",
              data: [10, 20, 30, 40]
            }
          ]
        }
      }
    ]
  };

  getWeather = async e => {
    e.preventDefault(); //prevents default behavior of component when we press button else refreshes entire page
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; //preventing no-cors policy issue

    /*---------------------------------API Call 1---------------------------------*/
    const url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`;
    //imperial units = Farenheit where metric = Celcius
    const api_call = await fetch(proxyurl + url1, {
      method: "GET",

      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ":",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Authorization"
      }
    });
    //Declaring API data object
    const data = await api_call.json();
    /* console.log(data); */
    /*---------------------------------API Call 2---------------------------------*/

    const url2 = `http://dataservice.accuweather.com/locations/v1/${country}/search?apikey=${API_KEY2}&q=${city}`;
    //API fetching the code for city to use when pulling hourly data
    const api_call2 = await fetch(proxyurl + url2, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Authorization"
      }
    });
    //Declaing API data object
    const data2 = await api_call2.json();
    console.log(data2);
    //Getting City Key for hourly weather
    const cityKey = data2[0].Key;

    /*---------------------------------API Call 3---------------------------------*/
    const url3 = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${API_KEY2}`;
    const api_call3 = await fetch(proxyurl + url3, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ":",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Authorization"
      }
    });
    //Declaing API data object
    const data3 = await api_call3.json();

    console.log(data3);

    /*---------------------------------Setting State to grab data needed---------------------------------*/
    this.setState({
      allResults: [
        {
          id: 0,
          description: "Weather",
          result: Math.round(data.main.temp) + "°F" //temperature
        },
        {
          id: 1,
          description: "Description",
          result: data.weather[0].description.toUpperCase() //Weather Description
        },
        {
          id: 2,
          description: "High",
          result: Math.round(data.main.temp_max) + "°F" //max temp
        },
        {
          id: 3,
          description: "Low",
          result: Math.round(data.main.temp_min) + "°F" //min temp
        },
        {
          id: 4,
          chartData: {
            labels: ["Boston", "Worcester"],
            datasets: [
              {
                label: "Population",
                data: [10, 20, 30, 40]
              }
            ]
          }
        }
      ]
    });

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <LeftSide
          getWeather={this.getWeather}
          currentWeatherDescription={this.state.allResults[0].description}
          currentWeatherResult={this.state.allResults[0].result}
          weatherDescription={this.state.allResults[1].description}
          weatherDescriptionResult={this.state.allResults[1].result}
          highTempDescription={this.state.allResults[2].description}
          highTempResult={this.state.allResults[2].result}
          lowTempDescription={this.state.allResults[3].description}
          lowTempResult={this.state.allResults[3].result}
        />
        <RightSide chartData={this.state.allResults[4].chartData} />
      </div>
    );
  }
}

export default App;
