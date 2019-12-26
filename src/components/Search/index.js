import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Search extends React.Component {
  render() {
    return (
      <form className="center mt-4" onSubmit={this.props.getWeather}>
        <input
          className="corners"
          type="text"
          name="city"
          placeholder="Enter City: Los Angeles"
        />
        <input
          className="corners ml-2"
          type="text"
          name="country"
          placeholder="Enter Country Code: US"
        />
        <button className="corners ml-2">Get Weather</button>
      </form>
    );
  }
}

export default Search;
