import { useState } from 'react';
import './App.css'
import { ThemeContext } from './context/theme-context';
import NavBar from './components/NavBar'
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <Home/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
