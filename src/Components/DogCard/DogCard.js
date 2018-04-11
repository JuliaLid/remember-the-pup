import React from "react";
import "./DogCard.css";

const DogCard = props => (
  <div className="card">
    <div onClick={()=> props.checkGuess(props.id) }className="img-container">
      <img id = {props.id} key = {props.id} alt="dog" src={props.image} />
      </div>
  </div>
);

export default DogCard;
