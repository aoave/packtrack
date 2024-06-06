// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <Tracker />
      </div>
    </div>
  );
}

export default App;
