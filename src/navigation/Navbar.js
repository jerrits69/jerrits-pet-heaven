import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "../photo/logo.jpg";
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const [menu, setMenu] = useState(false);
    return(
        <nav className = "navbar">
            <Link to="/"><img src={logo} alt="Pet Heaven logo"></img></Link>
            <h2>Pet Heaven</h2>
            <button className="menuButton" onClick={() => setMenu(!menu)}>
                ☰
            </button>
            <ul className = {menu ? "openMenu" : ""}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                <li><Link to="/adopt">Adopt</Link></li>
                <li><HashLink smooth to="/home#aboutus">About Us</HashLink></li>
                <li><HashLink smooth to = "/home/#faqs">FAQs</HashLink></li>
                {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                {isLoggedIn && (
                    <li>
                        <button onClick={onLogout} className="logout-button">Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;