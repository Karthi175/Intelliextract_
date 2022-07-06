import React from "react";
import styles from "./Graphchart.module.css";
import { Line } from "react-chartjs-2";
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Patients",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const Graphchart = () => {
  return (
    <>
      <div className={styles.graphConainer}>
        <h4
          style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            paddingLeft: "10px",
          }}
        >
          Patient Statistic
        </h4>
        <Line data={data} height="100px" />
      </div>
    </>
  );
};

export default Graphchart;
