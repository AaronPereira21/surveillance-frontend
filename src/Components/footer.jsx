// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.css';  // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">Surveillance System</a>
        </div>
        
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/24" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/24" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/24" alt="LinkedIn" />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Surveillance System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
