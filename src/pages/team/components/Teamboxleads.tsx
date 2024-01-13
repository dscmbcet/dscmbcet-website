import React from "react";
import "./teamboxleads.css";

interface PersonProps {
  name?: string;
  position?: string;
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
  backgroundColor?: string;
  img?: string;
  class?: string;
}

function Teamboxleads(props: PersonProps) {
  return (
    <div
      className={`teamboxlead ${props.class}`}
      style={{
        border: props.border,
        width: props.width,
        backgroundColor: props.backgroundColor,
        padding: props.padding,
        borderRadius: "20px",
        lineHeight: "2em",
        height: props.height,
      }}
    >
      <img src={props.img} />
      <div>
        <div>{props.position}</div>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Teamboxleads;
