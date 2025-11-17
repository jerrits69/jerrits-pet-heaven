import React from "react";
import instagram from "../photo/instagram.png";
import facebook from "../photo/facebook.png";
import tiktok from "../photo/tiktok.png";

const Footer = () => {
    return(
        <div className = "home5">
            <div className = "home5box">  
                <div className = "contactUs">
                    <h2>Contact Us</h2>
                    <p><b>Email:</b>&nbsp;jerritspetheaven@gmail.com</p>
                    <p><b>Phone:</b>&nbsp;+65 1269 1269</p>
                    <p><b>Address:</b>&nbsp;Bishan Street 69, BLK 69, Singapore 569169</p>
                </div>
                <div className = "socialMedia">
                    <h2>Follow Us</h2>
                    <img src = {instagram} alt = "instagram photo"></img>
                    <img src = {facebook} alt = "facebook photo"></img>
                    <img src = {tiktok} alt = "tiktok photo"></img>
                </div>
            </div>
            <div className = "home5box2">
                <p>© 2025 Pet Heaven. All rights reserved.</p>
            </div>
        </div>
    );
};
export default Footer;