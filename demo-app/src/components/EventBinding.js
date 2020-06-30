import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "HIii",
    };

    // this.clickMessage = this.clickMessage.bind(this);
  }

  //   clickMessage() {
  //     this.setState({
  //       message: "Hii abhay",
  //     });
  //   }

  clickMessage = () => {
    this.setState({
      message: "Hii abhay",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickMessage.bind(this)}> */}
        {/* <button onClick={() => this.clickMessage()}>Event BInding Click</button> */}
        <button onClick={this.clickMessage}>Event BInding Click</button>
      </div>
    );
  }
}

export default EventBinding;
