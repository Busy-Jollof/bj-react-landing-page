import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";


export const Home = () => {
  return (
    <div className="div-container">
      
      <div className="section-1-div">
        <div className="hero-left-div">
          <p className="text-1">The future of online African <br></br>
             food ordering and delivery
          </p>
          <p className="text-2">is coming to a <span style={{color: "#FE8200"}}>location near you!</span>
          </p>
          <p className="text-3">BusyJollof is an online food delivery and 
            ordering platform built with <br />intelligent 
            AI designed to find you the right meals. 
            We are on a quest <br />to feed your thirst 
            for African-inspired meals.
          </p>
          <button style={{border: "none"}} >Learn More</button>
          <button style={{backgroundColor: "whitesmoke", borderRadius: "5px", color: "green", width: "173px", border: "green"}}>Reserve a spot</button>
        </div>


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

