"use client";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useTheme } from "@/components/context/ThemeContext";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SpiderChart = ({ categoryData }) => {
  const { theme } = useTheme();

  // Default data if no category data provided
  const defaultLabels = [
    "Web Development",
    "Backend",
    "Databases",
    "DevOps",
    "Programming",
    "Tools",
  ];
  const defaultValues = [5, 4, 3, 3, 5, 4];

  const data = {
    labels: categoryData?.labels || defaultLabels,
    datasets: [
      {
        label: "Proficiency (1-5)",
        data: categoryData?.values || defaultValues,
        backgroundColor: `${theme.accent}40`, // Accent color with 40% opacity
        borderColor: theme.accent,
        borderWidth: 2,
        pointBackgroundColor: theme.accent,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: theme.accent,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "white",
        },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          backdropColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.r !== null) {
              label += context.parsed.r;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-[400px] xl:h-[500px] max-w-[700px]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SpiderChart;
