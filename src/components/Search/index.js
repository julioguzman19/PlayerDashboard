import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Search extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          id="cityInput"
          type="text"
          name="city"
          placeholder="Enter City: Los Angeles"
        />
        <input
          id="countryInput"
          type="text"
          name="country"
          placeholder="Enter Country Code: US"
        />
        <button id="getWeatherButton">Get Weather</button>
      </form>
    );
  }
}

export default Search;
