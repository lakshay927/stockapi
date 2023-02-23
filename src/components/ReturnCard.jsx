import React from "react";
import "../styles/card.css";
import PLBar from "./PLBar";

function ReturnCard(props) {
  return (
    <div className="card">
      <div>
        <div className="card-text">Market Value ${props.PL}</div>

        <div className="card-item">
          %of portfolio value
          <span className="card-text"> ${props.return}</span>
        </div>

        <div className="card-progress">
          <PLBar value={props.return} />
        </div>
      </div>
    </div>
  );
}

export default ReturnCard;
