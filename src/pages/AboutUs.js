import React from "react";
import "./pages.css";
import catdog from "../photo/catdog2.jpg";

const AboutUs = () => {
    return(
        <div className = "home3" id = "aboutus">
            <h1>About Us</h1>
            <div className = "home3box">
            <img src = {catdog} alt = "catdog2 photo"></img>
            <div className = "home3box2">
                <h2>Our vision:</h2>
                <p>
                Pet Heaven is a charity aim to help abandon animals to provide them food, shelter and daily care.
                Our goal is to promote kindness, safe and loving home for animals, preventing cruelty and eliminating further more of abandoned animals through education and rescue.
                We hope to foster a community where every animals is treated the same and no adopted pet is euthanized.
                Lastly, we offer free educational programs on responsible pet ownership.
            </p>  

            </div>
            </div>
        </div>
    );
};
export default AboutUs;