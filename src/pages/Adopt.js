import React, { useState } from "react";
import "./pages.css"
import Footer from "./Footer";
import cat1 from "../photo/cat1.jpg";
import cat2 from "../photo/cat2.jpg";
import cat3 from "../photo/cat3.jpeg";
import dog1 from "../photo/dog1.jpg";
import dog2 from "../photo/dog2.jpg";
import dog3 from "../photo/dog3.jpg";

const Adopt = ({isLoggedIn}) => {
    const animals = [
        {name: "Tung Tung Tung Sahur", image: cat1, age: 5, food: "Fish", hobby: "Ragebaiting"},
        {name: "Tralalero Tralala", image: cat2, age: 7, food: "Fish", hobby: "Swimming"},
        {name: "Ballerina Cappuccina", image: cat3, age: 9, food: "Fish", hobby: "Pranking"},
        {name: "Cappuccino Assassino", image: dog1, age: 10, food: "Meat", hobby: "Catching"},
        {name: "Chimpanzini Bananini", image: dog2, age: 13, food: "Meat", hobby: "Trolling"},
        {name: "Bombardiro Crocodilo", image: dog3, age: 15, food: "Meat", hobby: "Ragebaiting"},
    ];
    const [pet, setPet] = useState(null);
    const adoptPet = (pet) => {
        setPet(pet);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You adopted ${pet.name}`);
        setPet(null);
    };
    return(
        <div>
            <div className = "adoptContainer">
                <h1>Available Animals To Adopt</h1>
                <div className = "adoptRow">
                    {animals.map((animal, index) => (
                        <div key = {index}>
                            <div className = "animalBox">
                                <img className = "animalPhoto" src = {animal.image} alt = {animal.name}></img>
                                <div className = "animalDetails">
                                    <p><b>Name:</b>&nbsp;{animal.name}</p>
                                    <p><b>Age:</b>&nbsp;{animal.age}</p>
                                    <p><b>Favourite Food:</b>&nbsp;{animal.food}</p>
                                    <p><b>Hobby:</b>&nbsp;{animal.hobby}</p>
                                    <button onClick = {() => {adoptPet(animal)}}>Adopt</button>
                                </div>
                            </div>
                        </div>                
                    ))}
                </div>
            </div>
            {pet && (
                <div className = "adoptFormContainer">
                    <img className = "adoptFormImage" src = {pet.image} alt = {pet.name}></img>
                    <form className = "adoptForm" onSubmit = {handleSubmit}>
                        <h2>{pet.name}</h2>
                        <label htmlFor = "name">Name: </label>
                        <input type = "text" name = "name" required></input>
                        <label htmlFor = "phone">Phone</label>
                        <input type = "number" name = "phone" required></input>
                        <label htmlFor = "email">Email:</label>
                        <input type = "email" name = "email" required></input>
                        <label>Why are you interested in {pet.name}?</label>
                        <textarea rows = "10" cols = "30" required></textarea>
                        <button type = "submit">Submit</button>
                    </form>
                </div>
            )}
        <Footer></Footer>
        </div>
    );
};
export default Adopt;