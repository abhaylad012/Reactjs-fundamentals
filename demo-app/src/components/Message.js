import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome abhay",
    };
  }

  render() {
    return (
      <div>
        {/* <h1>Welcome visitor</h1> */}
        <h1>{this.state.message}</h1>

        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
