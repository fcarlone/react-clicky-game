import React from "react";
import "../styles/characterItem.css";

function CharacterItem(props) {
  // Destructure props
  const { image, id, name } = props.character;

  return (
    <div className="img-container">
      <img
        className="card"
        src={image}
        alt={name}
        onClick={() => props.handleClickEvent(id)}
      />
    </div>
  );
}

export default CharacterItem;
