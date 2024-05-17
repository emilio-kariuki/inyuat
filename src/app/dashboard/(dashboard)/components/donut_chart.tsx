"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({
  good,
  fair,
  reject,
}: {
  good: number;
  fair: number;
  reject: number;
}) => {
  const data = {
    datasets: [
      {
        label: "Products",
        data: [good, fair, reject],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
    labels: ["Good", "Fair", "Reject"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DonutChart;
