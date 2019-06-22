import React from "react";
import "../styles/characterItem.css";

function CharacterItem(props) {
  // Destructure props
  const { image, id } = props.character;

  return (
    <div className="card" style={{ width: "150px", margin: "1rem" }}>
      <div className="img-container">
        <img
          src={image}
          alt="character"
          style={{ width: "150px" }}
          onClick={() => props.handleClickEvent(id)}
        />
      </div>
    </div>
  );
}

export default CharacterItem;
