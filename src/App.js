import React, { Component } from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score:0,
    topScore:0,
    clickedImage: []
  };

  // Shuffle/resort the images
  shuffleImage = () => this.state.cards.sort((a,b) => Math.random()-0.5);

  // if user gets to all 12, shuffle the cards and reset the game
  clickedAllImage = () => {
    if(this.state.score === 12){
      this.shuffleImage();
      this.endGame();
    }
  }
 
  //reset function to reset score and clickedImage array when the game is over
  endGame = () => {
    this.setState({
    score:0,
    clickedImage:[]
    })
  }
  

  clickCount = event =>{
    // grab the id of the clicked image
    const currentImageId = event.target.id;
    
     // check to see if that image has been clicked/saved or not, are they in the state array clickedImage?
    const ifSaved = this.state.clickedImage.includes(currentImageId);

    // if the clicked item is not in clickedImage, then it hasn't been clicked and the score is increased
      if (!ifSaved){
       // adds the clicked item to clickedImage to track that it has been clicked
        this.state.clickedImage.push(currentImageId);


       //reset state
        this.setState({
          clickedImage:this.state.clickedImage,
          // increase the score
          score: this.state.score +1,
          topScore: (this.state.score +1 >= this.state.topScore)? this.state.score +1 : this.state.topScore
        });



        // sort the image function
        this.shuffleImage();

        // if user gets to all 12, shuffle the cards and reset the game
        this.clickedAllImage();
        
        console.log(this.state.topScore);
        console.log(currentImageId);
        console.log(this.state.clickedImage);
        
      }else{
        this.shuffleImage();
        this.endGame();
      }


    };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header> score={this.state.score} highscore={this.state.topScore}</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
