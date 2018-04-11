import React from "react";
import "./Jumbotron.css";
import dog from "./dog.svg"

const Jumbotron = props =>(

 <header className="header">
     <h1><span><img src= {dog} width="100" alt="dog"/></span> MEMORY GAME <span><img src= {dog} width="100" alt="dog"/></span> </h1>
     <h2>Click on an image once to earn points. You lose the game when you click on the same image more than once!</h2>
</header>     		

)


export default Jumbotron;
