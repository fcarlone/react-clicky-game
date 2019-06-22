import React from "react";
import "../styles/characterItem.css";

function CharacterItem(props) {
  // Destructure props
  const { image, id, name } = props.character;

  return (
    <div className="card" style={{ width: "200px", margin: "1rem" }}>
      <div className="img-container">
        <img
          src={image}
          alt={name}
          onClick={() => props.handleClickEvent(id)}
        />
      </div>
    </div>
  );
}

export default CharacterItem;
