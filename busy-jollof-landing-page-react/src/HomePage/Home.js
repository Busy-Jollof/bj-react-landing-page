import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";


export const Home = () => {
  return (
    <div className="div-container">
      
      <div className="section-1-div">
        <div className="hero-left-div"></div>
        <div className="hero-right-div">
          <img className="hero-left" src="./hero-right.png" alt=""/>
        </div>
      </div>
      <div className="section-2-div">2</div>
      <div className="section-3-div">3</div>
      <div className="section-4-div">4</div>
      <Footer />  
    </div> 
  );
};

export default Home;

