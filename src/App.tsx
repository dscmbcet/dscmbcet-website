import { useState } from 'react';
import './App.css'
import { ThemeContext } from './context/theme-context';
import { Route, RouterProvider, Routes, createBrowserRouter, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Events from './pages/events/Events';
import Footer from './components/Footer';
import Creators from './pages/creators/Creators';

function App() {
  const [theme, setTheme] = useState('light');
  const router = createBrowserRouter([
    {
      path: "*",
      element: <><Home/><Footer/></>,
    },
    {
      path: "/events",
      element: <><Events/><Footer/></>
    },
    {
      path: "/team",
      element: <><Team/><Footer/></>
    }
  ]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <RouterProvider router={router} />
        {/* <Events/><Footer/> */}

        {/* <Routes>
          <Route path='/' element={<><Home/><Footer/></>} />
          <Route path='/events' element={<><Events/><Footer/></>} />
        </Routes> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
