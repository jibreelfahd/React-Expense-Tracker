import React from "react";

import "./ChartBar.css";

const ChartBar = ({ maxValue, value, label }) => {
  let chartBarHeight = "0%";
  if (maxValue > 0) {
    chartBarHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartBarHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
