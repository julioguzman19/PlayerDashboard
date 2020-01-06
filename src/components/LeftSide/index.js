import React from "react";
import "./style.css";
import CurrentTemp from "../CurrentTemp";
import WeatherDescription from "../WeatherDescription";
import HighTemp from "../HighTemp";
import LowTemp from "../LowTemp";

function LeftSide(props) {
  return (
    <div id="leftArea">
      <CurrentTemp
        description={props.currentWeatherDescription}
        result={props.currentWeatherResult}
      />

      <WeatherDescription
        id="leftSideWeatherDescription"
        description={props.weatherDescription}
        result={props.weatherDescriptionResult}
      />
      <span id="leftSideHighLowFloat">
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
