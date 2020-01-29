import React, { Component } from "react";
import { Line } from "react-chartjs-2";
/* const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}; */
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
    legendPosition: "right"
  };

  render(props) {
    return (
      <div className="chart">
        <Line
          /* data={state} */
          width={400}
          height={350}
          options={{
            maintainAspectRatio: false,
            title: {
              display: this.props.displayTitle,
              text: "Hourly Weather",
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
                    fontColor: "white", // y-axis labels colors
                    suggestedMin: 50, //yaxis scale min
                    suggestedMax: 100,
                    stepSize: 10
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
