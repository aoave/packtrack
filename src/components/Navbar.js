// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <button className="nav-link btn-link" type="button">About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn-link" type="button">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
