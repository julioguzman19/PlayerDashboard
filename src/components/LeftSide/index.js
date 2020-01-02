import React from "react";
import "./style.css";
import CurrentTemp from "../CurrentTemp";
import WeatherDescription from "../WeatherDescription";

function LeftSide(props) {
  return (
    <div id="leftArea">
      <span>
        <CurrentTemp
          description={props.currentWeatherDescription}
          result={props.currentWeatherResult}
        />
      </span>
      <span id="lefSidetWeatherDescription">
        <WeatherDescription
          description={props.weatherDescription}
          result={props.weatherDescriptionResult}
        />
      </span>
    </div>
  );
}

export default LeftSide;
