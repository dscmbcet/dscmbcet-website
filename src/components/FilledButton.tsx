import { MouseEventHandler } from "react";
import "./FilledButton.css";

type Bprops = {
  text: string;
  textColor: string;
  bgColor: string;
  border: boolean;
  id?: string;
  fontSize?: string;
  onClick?: MouseEventHandler | undefined;
};

export default function FilledButton(props: Bprops) {

  return (
    <div className={"FilledButton"}>
      <button
        id={props.id}
        style={{
          cursor: "pointer",
          background: props.border ? "none" : props.bgColor,
          color: props.textColor,
          border: `0.15em Solid ${props.bgColor}`,
          fontSize: props.fontSize,
          zIndex: "10"
        }}
        value={props.text}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
}
