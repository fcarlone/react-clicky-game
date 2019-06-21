import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Score extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true
    };
  }

  handleClose = () => {
    this.setState({ show: false });
    // Reset Character state
    this.props.resetState();
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  x;
  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your Score is: {this.props.score}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Score;
