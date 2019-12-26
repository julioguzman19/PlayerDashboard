import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Search extends React.Component {
  render() {
    return (
      <form className="center mt-4" onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter City" />
        <input type="text" name="country" placeholder="Enter Country Code" />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Search;
