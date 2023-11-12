import React from "react";
import "./teambox.css";

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
function Teambox(props: PersonProps) {
  return (
    <div>
      <div
        className="teambox "
        style={{
          width: props.width,
          height: props.height,
          border: props.border,
          backgroundColor: props.backgroundColor,
          padding: props.padding,
          borderRadius: "30px",
          lineHeight: "2em",
        }}
      >
        <div>
          <div>{props.position}</div>
          <h1>{props.name}</h1>
        </div>
        <img src={props.img} />
      </div>
    </div>
  );
}

export default Teambox;
