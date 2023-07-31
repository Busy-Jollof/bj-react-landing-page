import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";

export const Home = () => {
  return (
    <div className="div-container">
      <div className="section-1-div">
        <div className="hero-left-div">
          <p className="text-1">
            The future of online African <br></br>
            food ordering and delivery
          </p>
          <p className="text-2">
            is coming to a{" "}
            <span style={{ color: "#FE8200" }}>location near you!</span>
          </p>
          <p className="text-3">
            BusyJollof is an online food delivery and ordering platform built
            with <br />
            intelligent AI designed to find you the right meals. We are on a
            quest <br />
            to feed your thirst for African-inspired meals.
          </p>
          <button style={{ border: "none" }}>Learn More</button>
          <button
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "5px",
              color: "green",
              width: "173px",
              borderColor: "green",
            }}
          >
            Reserve a spot
          </button>
        </div>

        <div className="hero-right-div">
          <img className="hero-left" src="./hero-right.png" alt="" />
        </div>
      </div>

      <div className="section-2-div">
        <div className="section-2-wrapper">
          <div className="sec-2-sub-div-1">
            <p className="title-text">Why we are different</p>
            <p className="desc-text">
              BusyJollof combines your everyday online food-ordering experience
              with our unique features to bring you <br />
              novel ways to order your favorite African meals. Here are some of
              the way we differ from everyone else.
            </p>
            {/*  <div className="sec-2-sub-div-2"></div> */}
          </div>

          {/* BOXES ON SECTION 2 */}

          <div className="box-container">
            <div className="sec-2-sub-div-2">
              <img
                style={{ height: "90px",paddingLeft: "2rem",
                    marginTop: "3.3rem" }}
                src="./driver.png"
                alt="deliver driver"
              />
              <p className="box-title">We deliver meals the big guys do not</p>
              <p className="box-description">We provide a broader food category of 
                African-inspired cuisines. That means, you 
                get more options of your favorite meals 
                and more. Unlike the big guys.</p>
                <button className="box-button" style={{border: "none"}}>Learn more</button>
                
            </div>

            <div className="sec-2-sub-div-2" style={{backgroundColor: "#E2F3E7"}}>
              <img
                style={{ height: "90px",paddingLeft: "2rem",
                    marginTop: "3.3rem" }}
                src="./rafiki.png"
                alt="deliver driver"
              />
              <p className="box-title">We offer a “search by <br/>meal-name” system</p>
              <p className="box-description">Our search feature is designed to enable 
              you directly search for the meal you want by its name rather than 
              going through layers of steps to find a simple meal.</p>
                <button className="box-button" style={{border: "none"}}>Learn more</button>
                
            </div>

            <div className="sec-2-sub-div-2">
              <img
                style={{ height: "90px",paddingLeft: "2rem",
                    marginTop: "3.3rem" }}
                src="./driver.png"
                alt="deliver driver"
              />
              <p className="box-title">We have <span style={{color: "#FE8200"}}>Pre-Order+</span> others do not</p>
              <p className="box-description">With our exclusive Pre-Order+ feature, 
              you can conveniently order large meals for your events, 
              add messages, and more, up to four weeks out. </p>
                <button className="box-button" style={{border: "none"}}>Learn more</button>
                
            </div>

          </div>
        </div>
      </div>

      <div className="section-3-div">
        <div className="sec-3-wrapper">
          <div className="sec-3-text-div">
            <p className="sec-3-title-text">What are we up to?</p>
            <p className="sec-3-desc-text">We are working round the clock to bring you the 
              best food ordering experience when you place an 
              order with us, we also believe it will be a great 
              idea to carry everyone along on every stage of our 
              progress. Because of this, we decided to create a 
              live timeline for everyone to follow up on our progress. 
              To find out how far we have come, or when we are 
              launching in your city, click the button below.</p>
              <button>See our progree</button>
          </div>
          <div className="sec-3-img-div">
            <img style={{height: "280px"}} src="./milestone.png" alt="img"/>
          </div>
        </div>
      </div>



      <div className="section-4-div">
        <div className="sec-4-wrapper">
          <p className="sec-4-title-text">Be in the know</p>
          <p className="sec-4-desc-text">Join our community, become one of the 
            beneficiaries of our first launch by 
            staying <br/>connected to our 
            fast growing community 
            of hungry food lovers.
            </p>
            <input className="sec-4-input" type="text" placeholder="Enter your email address here"/><br/>
            <button style={{
              borderRadius: "5px", 
              background: "rgba(2, 152, 55, 0.95)",
              width: "101%",
              height: "49px",
              flexShrink: "0"
              }}>Join our community</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
