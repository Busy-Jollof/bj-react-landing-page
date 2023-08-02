import React from "react";
import "./AboutUs.css";
import Footer from "../Footer/Footer";


export const AboutUs = () => {
  return (
    <div className="about-us-container">
    {/*   <h1>AboutUs</h1> */}
    <div className="about-us-text-wrapper">
        <div className="about-us-sec-1">

        <p className="about-us-title">Who are we?</p>
          <p className="about-us-desc">
          We are BusyJollof. An online food ordering and delivery service. 
          Yes, you read that right! "Another food delivery service, yet again" 
          As you might have figured out, the food delivery market is already saturated by a 
          lot of heavy hitters controlling what when you can eat to how much any restaurant on their 
          platforms makes. However, we are not here to compete with any of that. your go-to destination for 
          African-inspired meals delivered to your doorstep. We are proud to introduce a groundbreaking food 
          ordering and delivery service specializing exclusively in African-inspired cuisine. As the first of 
          its kind in the United States, BusyJollof revolutionizes how you explore, order, and savor the rich 
          flavors of African meals.<br/>

          <p>At BusyJollof, we understand the frustration that often accompanies ordering African-inspired meals. 
          Many talented chefs who create these culinary delights with the type and quantity of meals they make are not 
          easily accessible on popular food delivery apps or platforms. This leads to a chaotic experience, 
          requiring anyone who wants to order an authentic African-inspired meal to only rely on making scattered 
          WhatsApp calls or word-of-mouth recommendations with a lengthy and descriptive phone call before they can 
          place an order. This can not be in the year 2023, and we aim to change that by providing a seamless, 
          efficient, and reliable platform where you can easily search for your favorite African meals</p>

          <p className="about-us-subtitle">No Competition, Only Innovation</p>
          BusyJollof is different from any other food delivery app you've out there. We go beyond the 
          traditional search options and introduce a "search by meal" style app. This means you can explore 
          various African dishes, categorized by meal types, such as Snacks, Swallows, Soups, etc. Even on special 
          occasions. Our curated selection of meals ensures you have a diverse range of options at your fingertips, 
          allowing you to discover new and exciting flavors. These are significant categories of African-inspired meals 
          showcasing the richness of the motherland flavors, which have been constantly underrepresented in mainstream 
          food delivery platforms, and we aim to change that. BusyJollof seeks to provide a platform where every African 
          meal can shine, capturing the essence of the continent's vibrant food culture.
          </p>
        </div>
      </div>
      <div className="about-us-section-2-div">
        <div className="about-us-section-2-wrapper">
            <p className="about-us-section-2-title-text">Join our waitlist</p>
            <p className="about-us-section-2-desc-text">Reserve a spot on our waitlist to be among the first set of people to try our app when it launches.</p>
            <button style={{margin: "0", border: "none"}} >Learn more</button>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default AboutUs;
