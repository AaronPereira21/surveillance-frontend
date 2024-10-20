import React, { useState } from "react";
// import NovaWatchimage from '../assests/download.svg'
import "./Navbar.css";
import { Link as ScrollLink } from 'react-scroll';
function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <>
      <header className="header">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <h1 className="logo" > NOVAWATCH</h1>
        </ScrollLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li>
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
              
            >
              Home
            </ScrollLink>
          </li>
          <li >
            <ScrollLink
              to="abouts"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onSetActive={handleSetActive}
              
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Alerts"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              onSetActive={handleSetActive}
              
            >
              Alerts
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
              
            >
              Contact Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Settings"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
              
            >
              Settings
            </ScrollLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;