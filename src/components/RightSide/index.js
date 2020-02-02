import React from "react";
import "./style.css";
import Hourly from "..//Hourly";

function RightSide(props) {
  return (
    <div id="rightArea">
      <Hourly chartData={props.chartData} city={props.city} />
    </div>
  );
}

export default RightSide;
