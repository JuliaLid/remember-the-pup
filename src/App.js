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

  resetGame = (dogsArray) => {

    for (let i = 0 ; i < dogsArray.length ; i++){
      dogsArray[i].clicked = false;
    }

  
  }

  checkGuess = (id) =>{
    const dogsArray = this.state.dogs;

       //isolate the clicked dog image by id
    const clickedDog = dogsArray.filter(function(dog) {
        return dog.id === id;
    });


    if (clickedDog[0].clicked === false && correctGuess <11){
       
        clickedDog[0].clicked = true;
        correctGuess ++;

      
         
        this.shuffleArray(dogsArray);
        guessMessage = "You guessed correctly!";


        this.setState({correctGuess});
        this.setState({highScore});
        this.setState({guessMessage});
        this.setState({dogs:dogsArray});
              
    } else if (correctGuess === 12) {
        guessMessage = "You Win! Woof!";
        highScore = 12;
        correctGuess = 0;
        this.setState({correctGuess});
        this.setState({highScore});
        this.setState({guessMessage});
        this.resetGame(dogsArray);
    } else {
      
        guessMessage = "You lose! Try again!";
        correctGuess = 0;
        correctGuess = highScore;

        this.setState({guessMessage});
        
        this.setState({highScore});
        this.setState({correctGuess});
        this.resetGame(dogsArray);
    
    }

    
  
  }
  

render(){ 
     
  return(
<div>
  <Navbar 
    guessMessage = {this.state.guessMessage}
    correctGuess = {this.state.correctGuess}
    highScore = {this.highScore}

  />
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
