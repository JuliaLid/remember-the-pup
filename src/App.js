import React, { Component } from 'react';
import DogCard from "./Components/DogCard";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import './App.css';
import dogs from "./dogs.json";

class App extends Component {
  state = {
    dogs
  };

  // removeFriend = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({friends});
  // };

render(){ 
     
  return(
<div>
  <Navbar />
  <Jumbotron />
    <Main>
        {/* <h1 className="title">Friends List</h1> */}
          {this.state.dogs.map(dog => (
            <DogCard
              key = {dog.id}
              id = {dog.id}
               image = {dog.image}
             /> 
          ))}

      </Main>
      <Footer />
      </div>
    );
  }
}

export default App;
