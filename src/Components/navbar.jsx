// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import Profileimage from '../assests/profile.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">NovaWatch</a>
      </div>
      
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/alerts">Alerts</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>

      <div className="navbar-profile">
        <button className="profile-btn">
          <img src={Profileimage} alt="Profile" />
          
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
