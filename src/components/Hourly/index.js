import React from "react";
import "./style.css";
import Chart from "..//Chart";

function Hourly(props) {
  return (
    <div>
      <canvas id="hourlyChart">
        <Chart />
      </canvas>
    </div>
  );
}

export default Hourly;
