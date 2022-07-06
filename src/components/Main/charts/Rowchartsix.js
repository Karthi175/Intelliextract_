import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const data = {
  labels: ["PROCESSED", "PENDING"],
  datasets: [
    {
      label: "Processed",
      backgroundColor: "#855CF8",
      backgroundColor: [
        "#855CF8",
        "rgba(191, 172, 246, 0.9)",
      ],
      borderWidth: 2,
      data: [81, 56],
    },
    // {
    //   label: "Pending",
    //   backgroundColor: "rgba(191, 172, 246, 0.9)",
    //   borderWidth: 2,
    //   data: [81, 56],
    // },
  ],
};

const Rowchartsix = () => {
  return (
    <div style={{ padding: 10, background: "#D7DBFF" }}>
      <div style={{ top: 150, height: 415, borderRadius: 15, background: "#f5f5f5" }}>
        <Bar data={data} plugins={[ChartDataLabels]} options={{
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            datalabels: {
              formatter: function (value, context) {
                return context.chart.data.labels[context.dataIndex];
              },
              anchor: " right center",
              // offset: 43,
              padding: 20,
              clip: true,
              color: "white",
              font: {
                size: 20,
                weight: 700,
              }
            }
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                borderColor: 'blue',
                borderWidth: 1,
                color: ['#D3D6DF'],
                lineWidth: 1,
                z: 100,
                // display: false,
              },
              display: false, // without line
              ticks: {
                display: false
              }
            },
            x: {
              grid: {
                borderColor: '#D3D6DF',
                color: ['#D3D6DF'],
                lineWidth: 1,
                z: 100,
                borderDash: [5, 5],
                borderDashOffset: 2,
              },
            },
          }
        }}
        />
      </div>
    </div>
  );
};

export default Rowchartsix;
