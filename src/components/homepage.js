import React from "react";
import {useNavigate} from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    };
  
    
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <button onClick={handleClick} >Çıkış</button>
        </div>
    );
};
export default Homepage;