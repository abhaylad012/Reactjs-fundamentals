import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import Mycomp from "./components/Greet";
// import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <Greet></Greet>
          {/* <Mycomp></Mycomp> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <Welcome />
        </p>

        <p>
          <Hello />
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
