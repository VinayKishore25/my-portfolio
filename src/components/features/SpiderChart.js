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

const SpiderChart = ({ categoryData, showLabelsBelow = false }) => {
  const { theme } = useTheme();

  // Default data if no category data provided - always 6 points for hexagonal shape
  const defaultLabels = [
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6",
  ];
  const defaultValues = [80, 75, 85, 70, 90, 80];

  // Ensure we always have exactly 6 data points for hexagonal shape
  const ensureHexagonalData = (labels, values) => {
    if (!labels || !values)
      return { labels: defaultLabels, values: defaultValues };

    if (labels.length === 6 && values.length === 6) {
      return { labels, values };
    }

    // If less than 6, pad with empty
    if (labels.length < 6) {
      const paddedLabels = [...labels];
      const paddedValues = [...values];
      while (paddedLabels.length < 6) {
        paddedLabels.push("");
        paddedValues.push(0);
      }
      return { labels: paddedLabels, values: paddedValues };
    }

    // If more than 6, take first 6
    return { labels: labels.slice(0, 6), values: values.slice(0, 6) };
  };

  const hexData = ensureHexagonalData(
    categoryData?.labels,
    categoryData?.values
  );

  const data = {
    labels: showLabelsBelow ? hexData.labels.map(() => "") : hexData.labels,
    datasets: [
      {
        label: "",
        data: hexData.values,
        backgroundColor: `${theme.accent}35`,
        borderColor: theme.accent,
        borderWidth: 3,
        pointBackgroundColor: theme.accent,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: theme.accent,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.15)",
          lineWidth: 1,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          circular: false, // This makes it hexagonal
          lineWidth: 1,
        },
        pointLabels: {
          display: !showLabelsBelow,
          font: {
            size: window?.innerWidth < 640 ? 9 : 11,
            weight: "600",
          },
          color: "rgba(255, 255, 255, 0.9)",
          padding: 8,
        },
        min: 0,
        max: 100, // Fixed max value for consistent sizing
        ticks: {
          display: false, // Hide the numbers 1-2-3-4-5
          stepSize: 20,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend/proficiency button
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          title: (context) => {
            const index = context[0].dataIndex;
            return hexData.labels[index] || "";
          },
          label: (context) => {
            return `Proficiency: ${context.parsed.r}%`;
          },
        },
      },
    },
    animation: {
      duration: 800,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Fixed size container for consistent spider chart */}
      <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] flex items-center justify-center">
        <Radar data={data} options={options} />
      </div>

      {/* Labels displayed below the chart */}
      {showLabelsBelow && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center max-w-[320px]">
          {hexData.labels.map(
            (label, index) =>
              label && (
                <div
                  key={index}
                  className="flex items-center justify-center gap-1 text-xs text-white/80 bg-white/5 px-2 py-1 rounded-md"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: theme.accent }}
                  />
                  <span className="truncate">{label}</span>
                  <span className="text-accent font-semibold">
                    {hexData.values[index]}%
                  </span>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default SpiderChart;
