import { redirect } from "react-router-dom";
import Resource from "../navigation/Resource";
import Footer from "./Footer";

const ShowDogs = () => {
    const webURL = "https://api.thedogapi.com/v1/images/search/?limit=15&page=100&order=DESC";
    const render = (data) => {
        if(data.loading === true) return <p>loading ...</p>
        console.log("Got the data for dog", data );
        const eightDogs = data.trans.slice(0,8);
        return(
            <div className = "catdogRow">
                {eightDogs.map((dog, index) => (
                    <div className = "catdogBox" key = {index}>
                        <img  className = "catdogPhoto"src = {dog.url} alt = {`dog ${index + 1} logo`}></img>
                        <p className = "catdogCount">Dog {index + 1}</p> 
                    </div>
                ))}
            </div>
        )
    };
    return(
        <div>
            <h1>Pet Heaven's Dog</h1>
            <Resource path={webURL} render={render}></Resource>
            <Footer></Footer>
        </div>
    );
};
export default ShowDogs;