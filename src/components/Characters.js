import React from "react";
import CharacterItem from "./CharacterItem";
import Score from "./Score";
import characters from "../data/characters.json";

class Characters extends React.Component {
  state = {
    characters: characters,
    randomCharacters: [],
    selected: [],
    score: 0,
    match: false
  };

  // Randomly displayed characters
  componentDidMount() {
    const randomCharacters = characters.sort(() => {
      return Math.random() - 0.5;
    });
    this.setState({ randomCharacters });
  }

  handleClickEvent = id => {
    console.log("handle click event", id);
    // Spread operator to track IDs selected
    this.setState({ selected: [...this.state.selected, id] });
    // Invoke function to check ID argument against selected array
    this.handleCheckSelection(id);
    // Invoke function to change the random order of characters
    this.handleResortCharacters();
    // If score equal (array.length-1) - game over
  };

  handleResortCharacters = () => {
    const randomCharacters = this.state.randomCharacters.sort(() => {
      return Math.random() - 0.5;
    });
    this.setState({ randomCharacters });
  };

  handleCheckSelection = id => {
    console.log(
      "check the id against the selection array",
      id,
      this.state.selected
    );
    if (this.state.selected.includes(id)) {
      console.log("match - end game");
      this.setState({ match: true });
    } else {
      // No match - continue game
      console.log("continue");
      // Increment score
      this.setState({ score: this.state.score + 1 });
      console.log("Characters selected", this.state.selected);
      console.log("Score", this.state.score);
    }
  };

  render() {
    let renderScore = this.state.match;
    let score;

    if (renderScore) {
      score = <Score score={this.state.score} />;
    }
    return (
      <div>
        {score}
        {console.log(this.state.characters)}
        {this.state.randomCharacters.map(character => (
          <CharacterItem
            key={character.id}
            character={character}
            handleClickEvent={this.handleClickEvent}
          />
        ))}
      </div>
    );
  }
}

export default Characters;
