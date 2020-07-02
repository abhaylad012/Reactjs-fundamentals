import React, { Component } from "react";
import withComponent from "./withCounter";

class ClickCounter extends Component {
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
    // const { count } = this.statei;
    const { count, increamentCount } = this.props;
    return (
      <div>
        <button onClick={increamentCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default withComponent(ClickCounter);
