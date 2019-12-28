import React from "react";
import "./style.css";
import CurrentTemp from "../CurrentTemp";
import WeatherDescription from "../WeatherDescription";

function LeftSide(props) {
  return (
    <div className="verticalArea">
      <CurrentTemp
        description={props.currentWeatherDescription}
        result={props.currentWeather}
      />

      <WeatherDescription
        description={props.weahterDescription}
        result={props.weatherDescriptionResult}
      />
    </div>
  );
}

export default LeftSide;
