import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import animal from "../photo/animal.png";
import member from "../photo/member.png";
import faqs from "../photo/faq.png";
import "./pages.css";

const LearnMore = () => {
    return(
        <div className = "home2">
            <div className = "home2box">
                <img src = {animal} alt = " animal photo"></img>
                <p>Adopt an animal of your choice!</p>
                <Link to = "/adopt">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className = "home2box">
                <img src = {member} alt = "member photo"></img>
                <p>Be a member at Pet Heaven Society</p>
                <Link to = "/signup">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className = "home2box">
                <img src = {faqs} alt = "faq photo"></img>
                <p>All of your questions will be answered</p>
                <HashLink smooth to = "/home/#faqs">
                    <button>Learn More</button>
                </HashLink>
            </div>
      </div>
    );
};
export default LearnMore;