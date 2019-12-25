import React from "react";
import Search from "./components/Search";
import Box from "./components/Box";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
//User to enter city and country code api.openweathermap.org/data/2.5/weather?q={city name},{country code}

class App extends React.Component {
  state = {
    allResults: [
      {
        id: 1,
        result: undefined
      },
      {
        id: 2,
        result: undefined
      },
      {
        id: 3,
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
    const data = await api_call.json();
    console.log(data.main.temp);
    this.setState({
      allResults: [
        {
          id: 1,
          result: data.main.temp //temperature
        },
        {
          id: 2,
          result: data.name //city
        },
        {
          id: 3,
          result: data.sys.country //country
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <Search getWeather={this.getWeather} />
        <div style={{ display: "flex" }}>
          {this.state.allResults.map(item => (
            <Box key={item.id} result={item.result} />
          ))}
        </div>
        <p>Hello Weather World</p>
      </div>
    );
  }
}

export default App;
