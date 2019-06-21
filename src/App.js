import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
