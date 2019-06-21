import React from "react";
import CharacterItem from "./CharacterItem";
import characters from "../data/characters.json";

class Characters extends React.Component {
  state = {
    characters
  };

  handleClickEvent = id => {
    console.log("handle click event", id);
  };

  render() {
    return (
      <div>
        {console.log(this.state.characters)}
        {this.state.characters.map(character => (
          <CharacterItem
            key={character.id}
            id={character.id}
            character={character}
            handleClickEvent={this.handleClickEvent}
          />
        ))}
      </div>
    );
  }
}

export default Characters;
