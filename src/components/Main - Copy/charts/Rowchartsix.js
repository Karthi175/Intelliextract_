import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Patients",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const Rowchartsix = () => {
  return <Bar data={data} />;
};

export default Rowchartsix;
