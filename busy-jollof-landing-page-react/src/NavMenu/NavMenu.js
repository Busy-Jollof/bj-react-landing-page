import React, { useState } from "react";
import "./NavMenu.css"; // Import the CSS file for styling

const NavMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-wrapper">
      <span id="nav-message">Special accountments goes here</span>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <img className="logo-image" src="./bj-logo.png" alt="logo" />
          </div>

          {/* Mobile menu icon */}
          <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
            <div
              className={`menu-line ${isMobileMenuOpen ? "open" : ""}`}
            ></div>
            <div
              className={`menu-line ${isMobileMenuOpen ? "open" : ""}`}
            ></div>
            <div
              className={`menu-line ${isMobileMenuOpen ? "open" : ""}`}
            ></div>
          </div>

          {/* Menu items */}
          <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#our-timeline">Our Timeline</a>
            </li>
            <li>
              <a href="#slaunch-with-us">Launch with us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
