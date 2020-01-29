import React from "react";
import "./style.css";
import CurrentTemp from "../CurrentTemp";
import WeatherDescription from "../WeatherDescription";
import HighTemp from "../HighTemp";
import LowTemp from "../LowTemp";
import Search from "..//Search";

function LeftSide(props) {
  return (
    <div id="leftArea">
      <Search getWeather={props.getWeather} />
      <span id="stickComponentToLeftSide">
        <CurrentTemp
          description={props.currentWeatherDescription}
          result={props.currentWeatherResult}
        />
      </span>
      <span id="stickComponentToLeftSide">
        <WeatherDescription
          description={props.weatherDescription}
          result={props.weatherDescriptionResult}
        />
      </span>
      <span id="stickComponentToLeftSide">
        <HighTemp
          description={props.highTempDescription}
          result={props.highTempResult}
        />

        <LowTemp
          description={props.lowTempDescription}
          result={props.lowTempResult}
        />
      </span>
    </div>
  );
}
export default LeftSide;
