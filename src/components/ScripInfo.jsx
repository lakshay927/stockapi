import React from "react";

function ScripInfo(props) {
  const data = {
    scrip: "AADR",
    AvgCost: 41.75,
  };
  const scripStyle = {
    fontSize: "15px",
    fontWeight: "900",
    color: "#B7C1C0",
    width: 100,
  };

  const amountStyle = {
    fontSize: "30px",
    color: "#6BBDC8",
    fontWeight: "900",
  };
  return (
    <div>
      <div style={scripStyle}>{props.info.Scrip} </div>
      <div style={amountStyle}>{props.info.Price}</div>
    </div>
  );
}

export default ScripInfo;
