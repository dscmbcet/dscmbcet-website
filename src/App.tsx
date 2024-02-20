import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme-context";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Events from "./pages/events/Events";
import Creators from "./pages/creators/Creators";
import Layout from "./Layout";
import { WindowSizeContext } from "./context/window-size";
import Admin from "./pages/admin/login/login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Shortener from "./pages/shortener/shortener";
import ErrorPage from "./pages/error/error";

function App() {
  const [theme, setTheme] = useState("light");
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const ShortenerWrapper = () => {
    const { hash } = useParams();
    return <Shortener hash={hash} />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "creators",
          element: <Creators />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "s/:hash",
      element: <ShortenerWrapper />,
    },
  ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <WindowSizeContext.Provider value={{ windowSize: windowWidth }}>
        <div className={`theme-${theme}`}>
          <RouterProvider router={router} />
        </div>
      </WindowSizeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
