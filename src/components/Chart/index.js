import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div className="chart">
        <Line
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Hourly Weather in " + this.props.location,
              fontSize: 25,
              fontColor: "white" //Chart title colors
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    color: "white" // makes grid lines from y axis white
                  },
                  ticks: {
                    fontColor: "white" // y-axis labels colors
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
