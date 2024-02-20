import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ShortenerProps {
  hash: string | undefined;
}

const Shortener: React.FC<ShortenerProps> = ({ hash }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  if (hash == undefined) {
    navigate("/");
  }

  useEffect(() => {
    const redirectToUrl = async () => {
      if (!hash) {
        navigate("/");
        return;
      }

      const endpoint = import.meta.env.VITE_SHORTENER_ENDPOINT;
      const userName = import.meta.env.VITE_SHORTENER_USERNAME;
      const userPass = import.meta.env.VITE_SHORTENER_PASSWORD;

      try {
        const userIpRes = await fetch("https://api.ipify.org?format=json");
        const userIpData = await userIpRes.json();
        const userIp = userIpData.ip;

        const body = {
          hash,
          userName,
          userPass,
          userIp,
        };

        const res = await fetch(`${endpoint}/api/getURL`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data = await res.json();

        if (data.error) {
          navigate("/");
        } else {
          window.location.href = data.url;
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    redirectToUrl();
  }, [hash, navigate]);

  const loadingIcon = (
    <div className="loading-content">
      <div className="loader"></div>
    </div>
  );

  return loading ? loadingIcon : null;
};

export default Shortener;
