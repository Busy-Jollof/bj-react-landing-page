import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
   
    <div className="div-wrapper">
      <div className="footer-container">
        {/* First Column */}
        <div className="column">
          <div className="row logo">Logo</div>
          <div className="row description">Description</div>
          <div className="row social-icons">
            <i className="social-icon">Social Icon 1</i>
            <i className="social-icon">Social Icon 2</i>
            <i className="social-icon">Social Icon 3</i>
          </div>
        </div>

        {/* Second Column */}
        <div className="column">
          <div className="row bold-text">Pages</div>
          <div className="row">Page 1</div>
          <div className="row">Page 2</div>
          <div className="row">Page 3</div>
          <div className="row">Page 4</div>
          <div className="row">Page 5</div>
          <div className="row">Page 6</div>
        </div>

        {/* Third Column */}
        <div className="column">
          <div className="row">Row 1</div>
          <div className="row">Row 2</div>
          <div className="row">Row 3</div>
          <div className="row">Row 4</div>
        </div>

        {/* Fourth Column */}
        <div className="column">
          <div className="row">Row 1</div>
          <div className="row">Row 2</div>
          <button className="button">Button</button>
        </div>
      </div>
      </div>
    
  );
};

export default Footer;
