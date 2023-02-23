import React from "react";
import "../styles/card.css";
import ProgressBar from "./ProgressBar";

function MarketValueCard(props) {
  return (
    <div className="card">
      <div>
        <div className="card-text">Market Value ${props.marketValue}</div>

        <div className="card-item">
          %of portfolio value
          <span className="card-text"> ${props.portfolioValue}</span>
        </div>

        <div className="card-progress">
          <ProgressBar progress={props.portfolioValue} />
        </div>
      </div>
    </div>
  );
}

export default MarketValueCard;
