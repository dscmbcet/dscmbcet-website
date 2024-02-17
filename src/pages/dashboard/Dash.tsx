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
        <br />
        <label>URL :</label>
        <input type="text" id="url" name="url" />
        <br />
        <br />
        <button className="button">Submit</button>
      </form>
      <br />
      <h2>Hash: </h2>
      <br />
      <p>URL: </p>
      <br />
      <p>Created on: </p>
      <br />
      <p>clicks: </p>
      <br />
      <p>unique clicks: </p>
      <br />
      <button className="button red">Delete</button>
      <button
        id="button"
        className="button green"
        onClick={(event) => console.log(event)}
      >
        Edit
      </button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>
            URL:
            <input type="text" />
            <button className="button">Submit</button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Dash;
