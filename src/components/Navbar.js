import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";

// Stateless function
const NavBar = props => {
  console.log("Nav bar props", props);
  return (
    <Navbar className="navbar-container" fixed="top">
      <Navbar.Text className="d-flex w-50 order-0 nav-title">
        Clicky Game
      </Navbar.Text>
      <Navbar.Text className="d-flex w-50 justify-content-center order-2">
        <span
          className={
            props.score === 0 && props.match === false
              ? "grey"
              : props.match
              ? "red"
              : "green"
          }
        >
          {props.message}
        </span>
      </Navbar.Text>
      <Navbar.Text className="navbar-text  mt-1 w-50 text-right order-1 order-md-last">
        Your Score: {props.score} | High Score: {props.highScore}
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
