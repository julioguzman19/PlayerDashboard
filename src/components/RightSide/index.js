import React from "react";
import "./style.css";
import Hourly from "..//Hourly";

function RightSide(props) {
  return (
    <div id="rightArea">
      <Hourly
        chartData={props.chartData}
        datasets={props.datasets}
        location={props.location}
      />
    </div>
  );
}

export default RightSide;
