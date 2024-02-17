import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import React from "react";
import "./dash.css";
function Dash() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="dash">
      <form>
        <label>Hash :</label>
        <input type="text" id="hash" name="hash" />
        <br />
        <label>URL :</label>
        <input type="text" id="url" name="url" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Dash;
