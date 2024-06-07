// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Packages from './components/Packages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid px-0">
        <Packages />
      </div>
    </div>
  );
}

export default App;
