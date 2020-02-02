import React from "react";
import "./style.css";
import Chart from "..//Chart";

function Hourly(props) {
  return (
    <div>
      <Chart chartData={props.chartData} city={props.city} />
    </div>
  );
}

export default Hourly;
