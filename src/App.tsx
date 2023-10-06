import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme-context";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Events from "./pages/events/Events";
import Creators from "./pages/creators/Creators";
import Layout from "./Layout";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <h1>Page Not Found</h1>
      ),
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "events",
          element: <Events />
        },
        {
          path: "team",
          element: <Team />
        },
        {
          path: "creators",
          element: <Creators />
        },
      ]
    },
  ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
