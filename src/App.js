import React from 'react';
import DogCard from "./Components/DogCard";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import './App.css';
import dogs from "./dogs.json";

let correctGuess = 0;
let highScore = 0;
let guessMessage = "Will you guess correctly?"

class App extends React.Component {
  
  // state = {
  //   dogs:dogs,
  //   correctGuess:0,
  //   highScore:0,
  //   guessMessage:"Let's play"
  // };

  state = {
      dogs:dogs,
      correctGuess,
      highScore,
      guessMessage
     };

  shuffleArray = (array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  } 

  checkGuess = (id) =>{
    const dogsArray = this.state.dogs;

       //isolate the clicked dog image by id
    const clickedDog = dogsArray.filter(function(dog) {
        return dog.id === id;
        
    });

      console.log(clickedDog[0].clicked);

    if (clickedDog[0].clicked === false && correctGuess <11){
       
        clickedDog[0].clicked = true;
       correctGuess ++;
        console.log(clickedDog[0].clicked);
       
   
        this.shuffleArray(dogsArray);
        this.setState({dogs:dogsArray});
        console.log(dogsArray);
               
    }
    // else {
    //   console.log("you lost")
        
    // }
    
   
    // dogsArray.sort(function(a, b){return 0.5 - Math.random()});

    // // dogsArray.sort(function(a, b){return 0.5 - Math.random()});

    }
  

  //Method to reshuffle the cards on click

  // shuffleDogs=() => {
  //   const dogsArray = this.state.dogs;
  //   dogsArray.sort(function a, b){
  //     return 0.5 - Math.random()
  //     })
  //   }
  // }
  //Method to compare the state


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
    
          {this.state.dogs.map(dog => (
            <DogCard
              checkGuess={this.checkGuess}
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
