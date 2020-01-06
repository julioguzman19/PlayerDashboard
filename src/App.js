import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Search from "./components/Search";
import Box from "./components/Box";
import "./App.css";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
//User to enter city and country code api.openweathermap.org/data/2.5/weather?q={city name},{country code}

class App extends React.Component {
  state = {
    allResults: [
      {
        id: 1,
        description: "Weather",
        result: undefined
      },
      {
        id: 2,
        description: "Description",
        result: undefined
      },
      {
        id: 3,
        description: "High",
        result: undefined
      },
      {
        id: 4,
        description: "Low",
        result: undefined
      }
    ]
  };
  getWeather = async e => {
    e.preventDefault(); //prevents default behavior of component when we press button else refreshes entire page
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //imperial units = Farenheit where metric = Celcius
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const api_call2 = await fetch(
      `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${API_KEY}&units=imperial`
    );

    const data = await api_call.json();
    const data2 = await api_call2.json();
    console.log(data2);

    this.setState({
      allResults: [
        {
          id: 1,
          description: "Weather",
          result: Math.round(data.main.temp) + "°F" //temperature
        },
        {
          id: 2,
          description: "Description",
          result: data.weather[0].description.toUpperCase() //Weather Description
        },
        {
          id: 3,
          description: "High",
          result: Math.round(data.main.temp_max) + "°F" //max temp
        },
        {
          id: 4,
          description: "Low",
          result: Math.round(data.main.temp_min) + "°F" //min temp
        }
      ]
    });
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
        {/* <RightSide /> */}
        {/* <div>
          <Search getWeather={this.getWeather} />
        </div> */}
        {/*    <div className="horizontal">
          {this.state.allResults.map(item => (
            <Box
              key={item.id}
              result={item.result}
              description={item.description}
            />
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;
