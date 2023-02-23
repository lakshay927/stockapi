import React from "react";
import { useState } from "react";
const Button = (props) => {
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <button
      style={{
        backgroundColor: buttonHovered ? props.color : props.background,
        color: buttonHovered ? "white" : props.color,
        width: "80px",
        height: "50px",
        fontSize: "20px",
        borderRadius: "10px",
        border: "3px solid #D28B57",
        fontWeight: 700,
      }}
      onMouseEnter={() => setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
    >
      {props.text}
    </button>
  );
};
export default Button;
