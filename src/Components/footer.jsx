// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.css';  // Import the CSS file for styling
import Facebookimage from '../assests/facebook.png'
import Githubimage from '../assests/github.png'
import Linkedinimage from '../assests/linkedin.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">NovaWatch</a>
        </div>
        
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebookimage} alt="Facebook" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={Githubimage} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={Linkedinimage} alt="LinkedIn" />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NovaWatch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
