import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import Joinus from './pages/joinus/Joinus';
import Oppurtunities from './pages/oppurtunities/Oppurtunities';
import Resources from './pages/resources/Resources';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/oppurtunities" element={<Oppurtunities />} />
                <Route path="/joinus" element={<Joinus />} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </div>
    );
}

export default App;
