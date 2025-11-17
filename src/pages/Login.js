import React,  {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import Footer from "./Footer";

const Login = ({onLogin}) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username, password){
            const signupAccount = JSON.parse(localStorage.getItem("signupData"));
            if(!signupAccount){
                alert("Please sign up to login 😡");
                return;
            };
            if(username === signupAccount.username && password === signupAccount.password){
                alert(`Welcome ${username} 😄`);
                if(onLogin) onLogin();
                navigate("/home");
            }
            else{
                alert("Invalid username or password try again 😡");
            }
        }
        setusername("");
        setpassword("");
    };
    return(
        <div>
            <div className = "loginPage">
                <div className = "loginContainer">
                    <h2>Login</h2>
                    <form className = "loginForm" onSubmit = {handleSubmit}>
                        <label>Username: </label>
                        <input type = "text" value = {username} onChange = {(e) => setusername(e.target.value)} required></input>
                        <label>Password: </label>
                        <input type = "password" value = {password} onChange = {(e) => setpassword(e.target.value)} required></input>
                        <button type = "submit">Login</button>
                        <label>Dont have an account? <Link to = "/signup">Sign up one now!</Link></label>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Login;
