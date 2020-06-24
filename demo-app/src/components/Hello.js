import React, { createElement } from "react";

const Hello = () => {
  // return React.createElement('div', null, 'HEllo by Jsx');
  return React.createElement(
    "div", // tag
    { id: "Hello" }, //propery of tag
    createElement("h1", null, "Hello from nested jsx") //value of tag here its in nested
  );
};

export default Hello;
