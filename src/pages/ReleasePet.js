import React, { useState } from "react";
import "./pages.css";
import Footer from "./Footer";

const ReleasePet = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        petname: "",
        pettype: "",
        petage: "",
        petmessage: "",
        releasedate: "",
        releasetime: "",
        releasereason: ""
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.phone.length !== 8){
            alert("Phone must have 8 digits 😡");
            return;
        }
        alert("Successfully submitted Release Form 😄");
        setForm({
            name: "",
            phone: "",
            email: "",
            petname: "",
            pettype: "",
            petage: "",
            petmessage: "",
            releasedate: "",
            releasetime: "",
            releasereason: ""
        });
    };
    return(
        <div>
            <div>
                <form id = "releasepet" onSubmit = {handleSubmit}>
                    <h1>Release Pet Form</h1>
                    <div className = "releasepetbox">
                        <div className = "releasepet1">
                            <h2>Personal Particulars</h2>
                            <label htmlFor = "name">Name: </label>
                            <input type = "text" id = "name" name = "name" onChange = {handleChange} value = {form.name} required></input>
                            <label htmlFor = "phone">Phone: </label>
                            <input type = "number" id = "phone" name = "phone" onChange = {handleChange} value = {form.phone} required></input>
                            <label htmlFor = "email">Email: </label>
                            <input type = "email" id = "email" name = "email" onChange = {handleChange} value = {form.email} required></input>
                        </div>
                        <div className = "releasepet2">
                            <h2>Pet Particulars</h2>
                            <label htmlFor = "petname">Pet Name: </label>
                            <input type = "text" id = "petname" name = "petname" onChange = {handleChange} value = {form.petname} required></input>
                            <label htmlFor = "pettype">Pet Type:</label>
                            <select name = "pettype" id = "pettype" onChange = {handleChange} value = {form.pettype} required>
                                <option value = "">Select</option>
                                <option value = "cat">Cat</option>
                                <option value = "dog">Dog</option>
                            </select>
                            <label htmlFor = "petage">Pet Age: </label>
                            <input type = "number" id = "petage" name = "petage" onChange = {handleChange} value = {form.petage} required></input>
                            <label htmlFor = "petmessage">Pet Message:</label>
                            <textarea id = "petmessage" name = "petmessage" rows = "5" cols = "30" placeholder = "Any important information we should about your pet MUST be declared here"></textarea>
                        </div>
                        <div className = "releasepet3">
                            <h2>Release Particulars</h2>
                            <label htmlFor = "releasedate">Release Date: </label>
                            <input type = "date" id = "releasedate" name = "releasedate" onChange = {handleChange} value = {form.releasedate} required></input>
                            <label htmlFor = "releasetime">Release Time: </label>
                            <input type = "time" id = "releasetime" name = "releasetime" onChange = {handleChange} value = {form.releasetime} required></input>
                            <label htmlFor = "releasereason">Release Reason: </label>
                            <textarea id = "releasereason" name = "releasereason" rows = "5" cols = "30" onChange = {handleChange} value = {form.releasereason} required></textarea>
                        </div>
                        <button type = "submit">Submit</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default ReleasePet;