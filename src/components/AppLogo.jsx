import React from "react";
import "../styles/card.css";
function AppLogo() {
  const logo = {
    color: "green",
    fontSize: "30px",
    fontWeight: "800",
  };
  const subline = {
    color: "black",
    fontSize: "10px",
    fontWeight: "900",
    paddingLeft: "50px",
  };
  const header = {
    color: "black",
    fontSize: "25px",
    fontWeight: "900",
  };
  const subheader = {
    color: "black",
    fontSize: "20px",
    fontWeight: "600",
  };

  return (
    <div>
      <div style={logo}>iShares</div>
      <div style={subline}>by BlackRock</div>
      <div style={header}>S&P 500 Index</div>
      <div style={subheader}>US Equity </div>
    </div>
  );
}

export default AppLogo;
