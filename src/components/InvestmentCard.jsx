import React from "react";
import "../styles/card.css";
import { GiMoneyStack } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
function InvestedCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-item">
          <GiMoneyStack /> Quantity
        </div>
        <div className="card-text">{props.quantity}</div>
        <div className="card-item">
          <MdAlternateEmail /> Avg. Cost
        </div>
        <div className="card-text"> ${props.avgCost}</div>
        <div className="card-item">
          <FaRegMoneyBillAlt /> Invested Amt
        </div>

        <div className="card-text"> ${props.investedAmount}</div>
      </div>
    </div>
  );
}

export default InvestedCard;
