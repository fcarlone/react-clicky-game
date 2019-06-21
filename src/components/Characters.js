import React from "react";
import CharacterItem from "./CharacterItem";
import characters from "../data/characters.json";

class Characters extends React.Component {
  state = {
    characters: characters,
    randomCharacters: [],
    selected: [],
    score: 0
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
    // Increment score
    this.setState({ score: this.state.score + 1 });
    console.log("Characters selected", this.state.selected);
    console.log("Score", this.state.score);
    // Invoke function to check ID argument against selected array
    this.handleCheckSelection(id);
    // Invoke function to change the random order of characters
    this.handleResortCharacters();
    // If score equal array.length - game over
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
      console.log("match - DO SOMETHING");
    } else {
      console.log("continue");
    }
  };

  render() {
    return (
      <div>
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
