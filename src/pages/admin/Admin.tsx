import { ThemeContext } from "../../context/theme-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./admin.css";

function Admin() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  if (localStorage.getItem("isLoggedIn")) {
    navigate("/dashboard");
    return;
  }

  const listenOnSubmitClick = () => {
    if (!userData.username || !userData.password) {
      alert("Please enter username and password");
      return;
    }
    if (
      userData.username == import.meta.env.VITE_SHORTENER_USERNAME &&
      userData.password == import.meta.env.VITE_SHORTENER_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
      return;
    } else {
      alert("Invalid username or password");
      return;
    }
  };

  return (
    <div className="admin">
      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <br />
        <button className="button" onClick={listenOnSubmitClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Admin;
