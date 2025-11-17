import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pages.css"
import Footer from "./Footer";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username || !password || !phone || !email){
            alert("All fields are required! 😡");
            return;
        }
        const userData = {
            username,
            password,
            phone,
            email
        };
        localStorage.setItem("signupData", JSON.stringify(userData));
        alert(`${username} successfully sign up! 😄`);
        navigate("/login");
    };  
    return(
        <div>
            <div className = "signupPage">
                <div className = "signupContainer">
                    <h2>Sign Up</h2>
                    <form className = "signupForm" onSubmit = {handleSubmit}>
                        <label>Username: </label>
                        <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)} required></input>
                        <label>Password: </label>
                        <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} required></input>
                        <label>Phone: </label>
                        <input type = "number" value = {phone} placeholder = "Enter 8 digits phone number" onChange = {(e) => setPhone(e.target.value)} required></input>
                        <label>Email: </label>
                        <input type = "email" value = {email} onChange = {(e) => {setEmail(e.target.value)}} required></input>
                        <button type = "submit">Sign Up</button>
                        <label>Already have an account? <Link to = "/login">Login here!</Link></label>             
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default SignUp;