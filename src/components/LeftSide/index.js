import React from "react";
import "./style.css";
import CurrentTemp from "../CurrentTemp";
import WeatherDescription from "../WeatherDescription";
import HighTemp from "../HighTemp";

function LeftSide(props) {
  return (
    <div id="leftArea">
      <CurrentTemp
        description={props.currentWeatherDescription}
        result={props.currentWeatherResult}
      />

      <WeatherDescription
        description={props.weatherDescription}
        result={props.weatherDescriptionResult}
      />

      <HighTemp
        description={props.highTempDescription}
        result={props.highTempDescriptionResult}
      />
    </div>
  );
}

export default LeftSide;
