import React from "react";

const CharacterItem = props => {
  // Destructure props
  const { image, id } = props.character;

  const handleClickEvent = id => {
    console.log("handle click event", id);
  };

  return (
    <div
      className="card"
      style={{ width: "100px", backgroundColor: "yellow", margin: "1rem" }}
    >
      <div className="img-container">
        <img
          src={image}
          alt="character"
          style={{ width: "100px" }}
          onClick={() => handleClickEvent(id)}
        />
      </div>
    </div>
  );
};

export default CharacterItem;
