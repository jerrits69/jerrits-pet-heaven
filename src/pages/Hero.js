import React from "react";
import {Link} from "react-router-dom";
import "./pages.css";

const Hero = () => {
    return(
        <div className = "home1">
            <div className = "home1box">
                <h1>Open your heart<br></br>Open your home</h1>
                <p>
                    Start adopting an animal today, youre not just bringing home a companion but rather saving lives.
                    <br></br>
                    Make a powerful decision today and start adopting at <Link to = "/adopt">Pet Heaven</Link> where we have many animals.
                </p>
            </div>
        </div>
    );
};
export default Hero;