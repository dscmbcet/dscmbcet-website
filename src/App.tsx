import { useState } from 'react';
import './App.css'
import { ThemeContext } from './context/theme-context';
import NavBar from './components/NavBar'
import Home from './pages/home/Home';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <NavBar />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
