import React from "react";

const ProgressBar = ({ bgcolor = "green", progress, height = 15 }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#d3d3d3",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
