import React, { Component } from "react";
import withComponent from "./withCounter";

class HoverCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   increamentCount = () => {
  //     this.setState((prevState) => {
  //       return {
  //         count: prevState.count + 1,
  //       };
  //     });
  //   };

  render() {
    // const { count } = this.state;
    const { count, increamentCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hovered {count} Times</h1>
      </div>
    );
  }
}

export default withComponent(HoverCounter);
