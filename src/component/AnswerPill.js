import React from "react";
import "./style.css";

const AnswerPill = (props) => {
  return (
    <div
      onClick={props.onClick && props.onClick}
      className={`answer-pill ${props.selected && "active"}`}
      //   whenever props have selected value true it add 'active' class to this div
    >
      <p>{props.text}</p>
    </div>
  );
};

export default AnswerPill;
