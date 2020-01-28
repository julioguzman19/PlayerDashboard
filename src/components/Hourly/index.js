import React from "react";
import "./style.css";
import Chart from "..//Chart";

function Hourly(props) {
  return (
    <div>
      <Chart
        chartData={props.chartData}
        datasets={props.datasets}
        location={props.location}
      />
    </div>
  );
}

export default Hourly;
