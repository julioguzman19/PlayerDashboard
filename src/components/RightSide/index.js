import React from "react";
import "./style.css";
import Hourly from "..//Hourly";

function RightSide(props) {
  return (
    <div id="rightArea">
      <div id="chartBackground">
        <Hourly chartData={props.chartData} city={props.city} />
      </div>
    </div>
  );
}

export default RightSide;
