import React from "react";
import Navbar from "react-bootstrap/Navbar";

// Stateless function
const NavBar = props => {
  console.log("Nav bar props", props);
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Text>Navbar with text </Navbar.Text>
      <Navbar.Text> || Middle || </Navbar.Text>
      <Navbar.Text>
        Your Score: {props.score} | High Score: {props.highScore}
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
