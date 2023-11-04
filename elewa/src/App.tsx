import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Invest from './components/Invest';
import About from './components/About';




function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/invest" element={<Invest />} />
            
        </Routes>
    </div>
  );
}

export default App;
