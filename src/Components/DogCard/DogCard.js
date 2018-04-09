import React from "react";
import "./DogCard.css";

const DogCard = props => (
  <div className="card">
    <div className="img-container">
      <img id = {props.id} key = {props.id} alt="dog" src={props.image} />
      {/* <span onClick={()=> props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
  </div>
);

export default DogCard;
