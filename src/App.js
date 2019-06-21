import React, { Component } from "react";
import AnimeCard from "./components/AnimeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import animes from "./animes.json";
import Navbar from "./components/Navbar";




class App extends Component {
  state = {
    animes, 
    clickedAnimes: [],
    score: 0
  };


  imageClick = event => {
    const currentPicture = event.target.src;
    const pictureClickedAlready =
      this.state.clickedAnimes.indexOf(currentPicture) > -1;

      if (pictureClickedAlready) {
        this.setState({
          animes: this.state.animes.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAnimes: [],
          score: 0
        });
          alert("You guessed incorrectly!");


    } else {
      this.setState(
        {
          animes: this.state.animes.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAnimes: this.state.clickedAnimes.concat(
            currentPicture
          ),
          score: this.state.score + 1
        },
     
        () => {
          if (this.state.score === 14) {
            alert("You guessed correctly!");
            this.setState({
              animes: this.state.animes.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedAnimes: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
             <Navbar 
          score={this.state.score}
        />
        <Title><h1>Clicky Game</h1>
        </Title>
        {this.state.animes.map(anime => (
          <AnimeCard
            imageClick={this.imageClick}
            id={anime.id}
            key={anime.id}
            image={anime.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

