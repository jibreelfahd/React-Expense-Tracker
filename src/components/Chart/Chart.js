import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ dataPoints}) => {
  //getting the max value from the expensechart and computing the random maximum value
  const dataPointValue = dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMax}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
