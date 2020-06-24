import React from "react";

// function Greet() {
//   return <h1> Hello I m Greet !!</h1>;
// }

// by using arrow function
// const Greet = () => <h1>Hello I am Greet</h1>;

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello I am Greet {props.name} haha as {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// export const Greet = () => <h1>Hello I am Greet</h1>;

export default Greet;
