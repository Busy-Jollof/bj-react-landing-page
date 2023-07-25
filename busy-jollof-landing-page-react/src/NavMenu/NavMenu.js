import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./NavMenu.css";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import OurTimeLine from "../OurTimeLine/OurTimeLine";
import Launch from "../LaunchWithUs/Launch";
import Contact from "../ContactUs/Contact";
import Home from "../HomePage/Home";

const NavMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-wrapper">
      <Router>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/our-timeline">Our Timeline</Link>
              </li>
              <li>
                <Link to="/launch-with-us">Launch with us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-timeline" element={<OurTimeLine />} />
          <Route path="/launch-with-us" element={<Launch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavMenu;
