import React from "react";

const withComponent = (WrapperComponent) => {
  class WithComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    };

    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
        />
      );
    }
  }
  return WithComponent;
};

export default withComponent;
