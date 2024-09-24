import React, { useState } from "react";
import NovaWatchimage from '../assests/download.svg'
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
          <img src={NovaWatchimage} alt="logo" className="logo" />
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
              style={{ color: activeSection === "home" ? "#0077ff" : "#4fa9f2" }}
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
              style={{ color: activeSection === "objectives" ? "#0077ff" : "#4fa9f2" }}
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
              style={{ color: activeSection === "events" ? "#0077ff" : "#4fa9f2" }}
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
              style={{ color: activeSection === "team" ? "#0077ff" : "#4fa9f2" }}
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
              style={{ color: activeSection === "contact" ? "#0077ff" : "#4fa9f2" }}
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