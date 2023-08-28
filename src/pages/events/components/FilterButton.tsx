import { MouseEventHandler, useContext, useState } from "react";
import "../../../components/FilledButton.css"
import { ThemeContext } from "../../../context/theme-context"

type Bprops = {
  text: string;
  id?: string
  selected: boolean
  onClick?: MouseEventHandler | undefined;
};

export default function FilterButton(props: Bprops) {
    const { theme, setTheme } = useContext(ThemeContext);
    let active = props.selected
  return (
    <div className={"FilledButton"}>
      <button
        id={props.id}
        style={{
          cursor: "pointer",
          background: active ? (theme != "dark" ? "black" : "var(--cream)") : "none",
          color: active ? (theme === "dark" ? "black" : "white") : (theme === "dark" ? "white" : "black"),
          border: `0.15em Solid ${theme != "dark" ? "black" : "var(--cream)"}`,
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