import React from "react";
import "./style.css";
import Hourly from "..//Hourly";
import Chart from "..//Chart";

function RightSide() {
  return (
    <div id="rightArea">
      <Hourly />
      <Chart />
    </div>
  );
}

export default RightSide;
