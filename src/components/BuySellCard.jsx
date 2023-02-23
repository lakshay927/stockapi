import React from "react";
import "../styles/card.css";
import Button from "./Button";
function InvestedCard(props) {
  return (
    <div>
      <Button text={"BUY"} background={"#00800000"} color={"#D28B57"} />
      <br />
      <br />
      <Button text={"SELL"} background={"#00800000"} color={"#D28B57"} />
    </div>
  );
}

export default InvestedCard;
