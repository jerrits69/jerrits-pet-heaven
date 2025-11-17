import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './navigation/Navbar';
import Home from './pages/Home';
import ShowCat from './pages/ShowCat';
import ShowDogs from './pages/ShowDogs';
import Adopt from './pages/Adopt';
import ReleasePet from './pages/ReleasePet';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  useEffect(()=>{
    document.title = "Pet Heaven"
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return(
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}></Navbar>
        <div className="App"> 
          <Routes>
            <Route path = "/" element = {<Navigate to = "/home"></Navigate>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/cats" element={<ShowCat></ShowCat>}></Route>
            <Route path="/dogs" element={<ShowDogs></ShowDogs>}></Route>
            <Route path = "/adopt" element = {<Adopt isLoggedIn = {isLoggedIn}></Adopt>}></Route>
            <Route path = "/releasepet" element = {<ReleasePet></ReleasePet>}></Route>
            <Route path = "/login" element = {<Login onLogin = {handleLogin}></Login>}></Route>
            <Route path = "/signup" element = {<SignUp></SignUp>}></Route>
          </Routes>
        </div>
      </Router>
  );
};
export default App;
