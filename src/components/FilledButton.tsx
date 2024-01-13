import { MouseEventHandler } from "react";
import "./FilledButton.css";

type Bprops = {
  text: string;
  size?: string;
  textColor: string;
  bgColor: string;
  border: boolean;
  id?: string;
  fontSize?: string;
  onClick?: MouseEventHandler | undefined;
};

FilledButton.defaultProps = {
  text: "Button",
  size: "large",
  textColor: "white",
  bgColor: "black",
  border: false,
  id: "button",
  fontSize: "1em",
  onClick: undefined,
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
          padding: props.size!.includes("small") ? "4px 8px" : "8px 16px",

          border: `0.15em solid ${props.bgColor}`,
          fontSize: props.fontSize,
          zIndex: "10",
        }}
        value={props.text}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
}
