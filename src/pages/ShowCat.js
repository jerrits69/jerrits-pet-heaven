import { redirect } from "react-router-dom";
import Resource from "../navigation/Resource";
import Footer from "./Footer";

const ShowCat = () => {
    const webURL = "https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC";
    const render = (data) => {
        if(data.loading === true) return <p>loading ...</p>
        console.log("Got the data for cat", data );
        const eightCats = data.trans.slice(0,8);
        return(
            <div className = "catdogRow">
                {eightCats.map((cat, index) => (
                    <div className = "catdogBox" key = {index}>
                        <img  className = "catdogPhoto"src = {cat.url} alt = {`cat ${index + 1} logo`}></img>
                        <p className = "catdogCount">Cat {index + 1}</p> 
                    </div>
                ))}
            </div>
        )
    };
    return(
        <div>
            <h1>Pet Heaven's Cat</h1>
            <Resource path={webURL} render={render}></Resource>
            <Footer></Footer>
        </div>
    );
};
export default ShowCat;