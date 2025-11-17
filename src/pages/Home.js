import React, { useState } from 'react';
import "./pages.css";
import Hero from './Hero';
import LearnMore from "./LearnMore";
import AboutUs from './AboutUs';
import FAQItem from './FAQItem';
import Footer from "./Footer";

const Home = () => {
  return (
    <div className = "homeContainer">
      <div>
        <Hero></Hero>
      </div>
      <div>
        <LearnMore></LearnMore>
      </div>
      <div >
        <AboutUs></AboutUs>
      </div>
      <div>
        <FAQItem></FAQItem>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Home;
