import React, { Component } from "react";

class Welcome extends Component {
  //   render() {
  //     return <h1>Welcome from class component</h1>;
  //   }

  render() {
    return (
      <div>
        <h1>
          Welcome from class component {this.props.name} {this.props.children}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
