import { ThemeContext } from "../../../context/theme-context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./dashboard.css";

function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const endpoint = import.meta.env.VITE_SHORTENER_ENDPOINT;
  const userName = import.meta.env.VITE_SHORTENER_USERNAME;
  const userPass = import.meta.env.VITE_SHORTENER_PASSWORD;

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn != "true") {
    navigate("/admin");
    return <></>;
  }

  const [data, setData] = useState([
    {
      _id: null,
      url: null,
      hash: null,
      uniqueClicks: null,
      clicks: null,
      ips: null,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [urlData, setUrlData] = useState({
    url: "",
    hash: "",
    submit: false,
  });

  const handleItemClick = (item: any) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint + "/api/getAll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            userPass,
          }),
        });

        const fetchedData = await res.json();
        setData(fetchedData.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-landing">
      <div className="new-adder">
        <input
          type="text"
          placeholder="Enter URL"
          className="input-container"
          onChange={(e) => {
            setUrlData({ ...urlData, url: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter hash"
          className="input-container"
          onChange={(e) => {
            setUrlData({ ...urlData, hash: e.target.value });
          }}
        />
        <br />
        <br />
        <button
          className="shorten-button"
          onClick={(e) => {
            setUrlData({ ...urlData, submit: true });
          }}
        >
          Shorten
        </button>
      </div>
      {urlData.submit === true && urlData.hash !== "" && urlData.url !== "" && (
        <div className="new-adder">
          <p>URL shortened successfully!</p>
          <p>
            <strong>URL:</strong> {urlData.url}
            <br />
            <strong>Hash:</strong> {urlData.hash}
          </p>
          <br />
          {/* #TODO: shorten the URL */}
          <button
            className="action-button"
            onClick={() => setUrlData({ url: "", hash: "", submit: false })}
          >
            Close
          </button>
        </div>
      )}
      <br />
      <br />
      <div className="list-existing">
        <h2>Existing Shortened URLs</h2>
        <br />
        {data.length === 0 && <p>No URLs found.</p>}
        {data ? (
          <div>
            {data.length !== 0 ? (
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
                    <div className="item-details">
                      <p>
                        <strong>Number of Clicks:</strong> {item.clicks}
                      </p>
                      <p>
                        <strong>Unique Clicks:</strong> {item.uniqueClicks}
                      </p>
                      <br />
                      <button
                        className="action-button"
                        onClick={() => console.log("List IPs:", item.ips)}
                      >
                        List IPs
                      </button>
                      <button className="action-button">Edit</button>
                      <button className="action-button">Delete</button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
export default Dashboard;
