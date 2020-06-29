import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import Mycomp from "./components/Greet";
// import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />

        {/* <Message></Message> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
        {/* <Greet name="Bruce" heroName="Batman">
          Hello i am childran data
        </Greet>
        <Greet name="Clark" heroName="Suparman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="SuperWomen" />
        {/* <Mycomp></Mycomp> */}
        {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* <Welcome name="Bruce" heroName="Batman">
          Hola I am also children
        </Welcome>
        <Welcome name="Clark" heroName="Suparman" />
        <Welcome name="Clark" heroName="Suparman" /> */}
        {/* </p> */}

        {/* <Hello />  */}

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
