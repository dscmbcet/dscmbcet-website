import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./dashboard.css";

function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    navigate("/admin");
    return;
  }

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

  // const data = fetch(`${import.meta.env.VITE_SHORTENER_ENDPOINT}/getAll`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     userName: import.meta.env.VITE_SHORTENER_USERNAME,
  //     userPass: import.meta.env.VITE_SHORTENER_PASSWORD,
  //   }),
  // }).then((res) => res.json());

  // return (
  //   <ul>
  //     {data.map((item) => (
  //       <li key={item.url}>{item.hash}</li>
  //     ))}
  //   </ul>
  // );
}
export default Dashboard;
