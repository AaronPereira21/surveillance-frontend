// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Surveillance System</a>
      </div>
      
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/alerts">Alerts</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>

      <div className="navbar-profile">
        <button className="profile-btn">
          <img src="https://via.placeholder.com/30" alt="Profile" />
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
