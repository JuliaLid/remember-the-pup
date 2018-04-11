import React from 'react';
import DogCard from "./Components/DogCard";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import './App.css';
import dogs from "./dogs.json";


class App extends React.Component {
  
  state = {
    dogs:dogs,
    correctGuess:0,
    highScore:0,
    guessMessage:"Will you guess correctly?"
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
    let score = this.state.correctGuess;
    let message = this.state.guessMessage;
    let currentHighScore = this.state.highScore;

       //isolate the clicked dog image by id
    const clickedDog = dogsArray.filter(function(dog) {
        return dog.id === id;
    });

    if (clickedDog[0].clicked === false && score <11){
       
        clickedDog[0].clicked = true;
        score ++;
        currentHighScore ++;
        message = "You guessed correctly!";
         
        this.shuffleArray(dogsArray);
       
        this.setState({
          dogs:dogsArray,
          correctGuess:score,
          highScore:currentHighScore,
          guessMessage:message
        });
    } else if (score === 12) {
         message = "You Win! Woof!";
         currentHighScore = 12;

        this.setState({
          dogs:dogsArray,
          highScore:currentHighScore,
          correctGuess:score,
          guessMessage:message
        });
    } else {
        message = "You lose! Try again!";
        score = 0;

        this.setState({
          dogs:dogsArray,
          highScore:currentHighScore,
          correctGuess:score,
          guessMessage:message
        });

        this.resetGame(dogsArray);
    }
  }
  

  render(){ 
      
    return(
  <div>
    <Navbar 
      guessMessage = {this.state.guessMessage}
      correctGuess = {this.state.correctGuess}
      highScore = {this.state.highScore}

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
