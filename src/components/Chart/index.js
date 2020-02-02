import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./style.css";

class Chart extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  render() {
    return (
      <div className="chart" id="chartBackground">
        <Line
          data={this.props.chartData}
          width={600}
          height={350}
          options={{
            maintainAspectRatio: false,
            title: {
              display: this.props.displayTitle,
              text: this.props.city.toUpperCase() + " HOURLY WEATHER",
              fontSize: 25,
              fontColor: "white" //Chart title colors
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "white" //font color on temp in F label
              }
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    color: "white" // makes grid lines from y axis white
                  },
                  ticks: {
                    fontColor: "white", // y-axis labels colors

                    stepSize: 2
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    color: "white" // makes grid lines from x axis white
                  },
                  ticks: {
                    fontColor: "white" // x-axis labels colors
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
