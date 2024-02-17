const Shortener = async (hash: string) => {
  if (!hash) {
    return (window.location.href = "/");
  }
  // get redirect-to URL from db
  const endpoint = import.meta.env.SHORTENER_ENDPOINT;
  const userName = import.meta.env.SHORTENER_USERNAME;
  const password = import.meta.env.SHORTENER_PASSWORD;

  // #TODO: get user IP, POST to endpoint, get URL and redirect
};

export default Shortener;
