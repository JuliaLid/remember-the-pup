import React from "react";
import "./Navbar.css";

const Navbar = props =>(
 <div className="navbar"> 
   <ul>
        <li><a href="index.html">Remember the Pup</a></li>
        <li>{props.guessMessage}</li>
        <li>Score: {props.correctGuess} | High Score: {props.highScore}</li>
    </ul>
</div> 			
                  		

)


export default Navbar;
