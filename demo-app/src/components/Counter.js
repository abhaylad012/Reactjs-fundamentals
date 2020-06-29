import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
  }

  incrementTimes() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback value", this.state.count);
        // console.log("PreviousState value", this.prevState.count);
      }
    );
  }

  incrementFiveTimes() {
    this.incrementTimes();
    console.log("In five times increment value", this.state.count);
    this.incrementTimes();
    console.log("In five times increment value", this.state.count);
    this.incrementTimes();
    console.log("In five times increment value", this.state.count);
    this.incrementTimes();
    console.log("In five times increment value", this.state.count);
    this.incrementTimes();
    console.log("In five times increment value", this.state.count);
  }

  //   with props function example
  incrementTimesWithProps() {
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback value", this.state.count);
        // console.log("PreviousState value", this.prevState.count);
      }
    );
  }

  clear() {
    this.setState({
      count: 0,
    });
  }

  decrement() {
    if (this.state.count != 0)
      this.setState({
        count: this.state.count - 1,
      });
  }

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.clear()}> Clear</button>
        <button onClick={() => this.decrement()}> Decrement</button>
        <div>
          <button onClick={() => this.incrementFiveTimes()}>
            IncrementFiveTImes
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
