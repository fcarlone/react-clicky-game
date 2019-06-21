import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";

// Stateless function
const NavBar = props => {
  console.log("Nav bar props", props);
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Text>Clicky Game </Navbar.Text>
      <Navbar.Text>
        ||
        <span
          className={
            props.score === 0 && props.match === false
              ? "grey"
              : props.match
              ? "red"
              : "green"
          }
        >
          {props.message}{" "}
        </span>
        ||
      </Navbar.Text>
      <Navbar.Text>
        Your Score: {props.score} | High Score: {props.highScore}
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
