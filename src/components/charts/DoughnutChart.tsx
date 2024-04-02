import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Fair launch", "Liquidity", "Mining", "Airdrop", "Team"],
  datasets: [
    {
      data: [700, 150, 200, 170, 100],
      backgroundColor: ["#90E788", "#FF6A55", "#B1E5FC", "#2A85FF", "#8E59FF"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "80%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

const chartDataMockup = [
  {
    label: "Fairlaunch",
    value: 700,
    color: "#90E788",
  },
  {
    label: "Liquidity",
    value: 150,
    color: "#FF6A55",
  },
  {
    label: "Mining",
    value: 200,
    color: "#B1E5FC",
  },
  {
    label: "Airdrop",
    value: 170,
    color: "#2A85FF",
  },
  {
    label: "Team",
    value: 100,
    color: "#8E59FF",
  },
];

const Chart = () => {
  const percentage = (p: number) => ((p / 1320) * 100).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center self-stretch gap-[37px]">
      <Doughnut
        data={data}
        options={options}
        className="max-w-[228px] max-h-[288px]"
      />
      <div className="flex flex-col items-start gap-4">
        {chartDataMockup.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div
              className={`rounded-full w-[13px] h-[13px] bg-[${item.color}]`}
            ></div>
            <span className="text-xs font-medium text-white">
              {item.label} ({percentage(item.value)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
