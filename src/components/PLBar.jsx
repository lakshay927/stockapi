import React from "react";
import "../styles/PLBar.css";

const PLBar = ({ value }) => {
  const barWidth = `${Math.abs(value) / 2}%`;
  const barColor = value >= 0 ? "green" : "red";

  const filledBarStylePositive = {
    width: barWidth,
    backgroundColor: barColor,
    left: "50%",
  };
  const filledBarStyleNegative = {
    width: barWidth,
    backgroundColor: barColor,
    right: "50%",
  };
  return (
    <div className="progress-bar">
      {value >= 0 ? (
        <div className="bar" style={filledBarStylePositive} />
      ) : (
        <div className="bar" style={filledBarStyleNegative} />
      )}
    </div>
  );
};

export default PLBar;
