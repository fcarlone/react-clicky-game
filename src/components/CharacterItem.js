import React from "react";

function CharacterItem(props) {
  // Destructure props
  const { image, id } = props.character;

  return (
    <div className="card" style={{ width: "200px", margin: "1rem" }}>
      <div className="img-container">
        <img
          src={image}
          alt="character"
          style={{ width: "200px" }}
          onClick={() => props.handleClickEvent(id)}
        />
      </div>
    </div>
  );
}

export default CharacterItem;
