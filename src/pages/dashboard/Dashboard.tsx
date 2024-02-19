import { ThemeContext } from "../../context/theme-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./dashboard.css";

function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn != "true") {
    navigate("/admin");
    return <></>;
  }

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: any) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const res = {
    // temporary change later
    error: null,
    data: [
      {
        _id: "65d05562bdd6d44b840b0995",
        url: "https://deno.land/x/",
        hash: "deno",
        createdAt: "2024-02-17T06:42:42.377Z",
        clicks: 7,
        uniqueClicks: 4,
        ips: ["127.0.0.1", "121.121.121", "192.168.1.1", "192.168.69.1"],
      },
      {
        _id: "65d05aa9a4d4de1991418a38",
        url: "https://xditya.me/",
        hash: "xditya",
        createdAt: "2024-02-17T07:05:13.191Z",
        clicks: 17,
        uniqueClicks: 2,
        ips: ["127.0.0.1", "121.121.121", "192.168.1.1", "192.168.69.1"],
      },
    ],
  };
  const data = res.data;
  return (
    <div className="dashboard-landing">
      <div className="new-adder">
        <input
          type="text"
          placeholder="Enter URL"
          className="input-container"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter hash"
          className="input-container"
        />
        <br />
        <br />
        <button className="shorten-button">Shorten</button>
      </div>
      <br />
      <br />
      <div className="list-existing">
        <h2>Existing Shortened URLs</h2>
        <br />
        {data.length === 0 && <p>No URLs found.</p>}
        {data.length !== 0 &&
          data.map((item) => (
            <div
              key={item._id}
              className={`item-container ${selectedItem === item._id ? "expanded" : ""}`}
              onClick={() => handleItemClick(item._id)}
            >
              <p>
                <strong>URL:</strong> {item.url}
                <br />
                <strong>Hash:</strong> {item.hash}
              </p>
              {selectedItem === item._id && (
                <div>
                  <p>
                    <strong>Number of Clicks:</strong> {item.clicks}
                  </p>
                  <p>
                    <strong>Unique Clicks:</strong> {item.uniqueClicks}
                  </p>
                  <button onClick={() => console.log("List IPs:", item.ips)}>
                    List IPs
                  </button>
                  <br />
                  <button>Edit</button>
                  <br />
                  <button>Delete</button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
export default Dashboard;
