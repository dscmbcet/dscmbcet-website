import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import React from "react";
import "./admin.css";

function Admin() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="admin">
      <form>
        <label>Username :</label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label>Password :</label>
        <input type="password" id="password" name="password" />
        <br />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
export default Admin;
