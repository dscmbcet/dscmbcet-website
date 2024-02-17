const Shortener = async (hash: string) => {
  if (!hash) {
    return (window.location.href = "/");
  }
  // get redirect-to URL from db
  const endpoint = import.meta.env.VITE_SHORTENER_ENDPOINT;
  const userName = import.meta.env.VITE_SHORTENER_USERNAME;
  const userPass = import.meta.env.VITE_SHORTENER_PASSWORD;

  // #TODO: get user IP, POST to endpoint, get URL and redirect
  const userIp = await fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => data.ip);
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
    return (window.location.href = "/");
  }
  return (window.location.href = data.url);
};

export default Shortener;
