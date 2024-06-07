// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">PackTrack</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
