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
        <label>Password :</label>
        <input type="password" id="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Admin;
