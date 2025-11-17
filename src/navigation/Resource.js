import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import "./animals.css"

const Resource = ({path, render}) => {
    const startState = {
        trans: [],
        loading: true,
        error: null
    };
    const [state, setState] = useState(startState);
    const getData = async() => {
        try{
            const result = await axios.get(path);
            console.log("Result", result);
            const newData = {
                trans: result.data,
                loading: false,
                error:null
            };
            setState(newData);
        }
        catch(error){
            alert("Error getting data", error.message)
        }
    };
    useEffect(()=>{
        getData();
    }, []);
    return(
        <div className = "showAnimals">
            {render(state)}
        </div>
    );
};
export default Resource;