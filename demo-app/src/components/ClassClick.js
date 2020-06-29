import React, { Component } from "react";

class ClassClick extends Component {
  clickMessage() {
    alert("Hello abhay from class");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickMessage}>Click Class</button>
      </div>
    );
  }
}

export default ClassClick;
