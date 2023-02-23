import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
const Parentdiv = {
  gridColumn: 2,

  labels: ["MF", "ETF"],
};

const Graph = (props) => {
  const data = {
    labels: ["MF", "ETF"],
    datasets: [
      {
        data: [45, 55],
        backgroundColor: ["#6ABADB", "#A99347"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div style={Parentdiv}>
      <h2>Portfolio</h2>
      <div style={{ width: "200px", height: "200px" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};
export default Graph;
