import React from "react";
import Search from "./components/Search";
import Box from "./components/Box";
require("dotenv").config();

const API_KEY = process.env.API_KEY;
//User to enter city and country code api.openweathermap.org/data/2.5/weather?q={city name},{country code}
class App extends React.Component {
  getWeather = async e => {
    e.preventDefault(); //prevents default behavior of component when we press button else refreshes entire page
    const api_call = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=Sandy,us&appid=${API_KEY}&units=metrics`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Search getWeather={this.getWeather} />
        <Box />
        <p>Hello Weather World</p>
      </div>
    );
  }
}

export default App;
