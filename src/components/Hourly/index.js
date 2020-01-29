import React from "react";
import "./style.css";
import Chart from "..//Chart";

function Hourly(props) {
  return (
    <div>
      <Chart chartData={props.chartData} />
    </div>
  );
}

export default Hourly;
