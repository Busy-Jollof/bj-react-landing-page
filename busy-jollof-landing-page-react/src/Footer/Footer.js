import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="div-wrapper">
      <div className="footer-container">
        {/* First Column */}
        <div className="column">
          <div className="row"><img className="logo" src="./bj-footer-logo.png" alt="logo"></img></div>
          <div className="row description">The future of online African food ordering <br/>and delivery</div>
          <div className="row social-icons">
            <i className="social-icon"><img className="sm-icon" src="./insta.png" alt="logo"/></i>
            <i className="social-icon"><img className="sm-icon" src="./Twiter.png" alt="logo"/></i>
            <i className="social-icon"><img className="sm-icon" src="./Fb.png" alt="logo"/></i>
            
          </div>
        </div>

        {/* Second Column */}
        <div className="column">
          <div className="row bold-text">Pages</div>
          <div className="row">Home</div>
          <div className="row">About us</div>
          <div className="row">Blog</div>
          <div className="row">Launch with us</div>
          <div className="row">Our TimeLine</div>
          <div className="row">Contact us</div>
        </div>

        {/* Third Column */}
        <div className="column">
          <div className="row bold-text">Our Company</div>
          <div className="row">Privacy policy</div>
          <div className="row">About us</div>
          <div className="row">FAQ</div>
        </div>

        {/* Fourth Column */}
        <div className="column">
          <div className="row bold-text">For more information</div>
          <div className="row">
            Contact us at info@busyjollof.com or click the button below to send
            us a message
          </div>
          <button className="button">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
