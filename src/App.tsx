import { useState } from 'react';
import './App.css'
import { ThemeContext } from './context/theme-context';
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Events from './pages/events/Events';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <Events/><Footer/>
        {/* <Routes>
          <Route path='/' element={<><Home/><Footer/></>} />
          <Route path='/events' element={<><Events/><Footer/></>} />
        </Routes> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
