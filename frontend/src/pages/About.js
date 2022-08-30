import React from "react";
import AboutImage from "../assets/banner.jpeg";
import AboutCard from "../components/AboutCard";
import Hero from "../components/Hero";
import Services from "../components/Services";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
       <img src={AboutImage} alt='' /> 
      <div className="aboutBottom">
        <div className="containerA">
          <AboutCard />
          <Services/>
          <Hero/>
        </div>
      </div>
      <section className="about-top">
        
      </section>
      
    </div>
  );
}

export default About;
