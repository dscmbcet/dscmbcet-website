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
import Footer from "./components/Footer";
import Creators from "./pages/creators/Creators";

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
      path: "*",
      element: (
        <>
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/events",
      element: (
        <>
          <Events />
          <Footer />
        </>
      ),
    },
    {
      path: "/team",
      element: (
        <>
          <Team />
          <Footer />
        </>
      ),
    },
    {
      path: "/creators",
      element: (
        <>
          <Creators />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <RouterProvider router={router} />
        {/* <Events/><Footer/> */}

        {/* <Routes>
          <Route path='/' element={<><Home/><Footer/></>} />
          <Route path='/events' element={<><Events/><Footer/></>} />
        </Routes> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
