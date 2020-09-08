import React from "react";
import logo from "./logo.svg";
import tw from "twin.macro";
import "./App.css";

function App() {
  const BlueP = tw.p`text-white bg-blue-600 `;

  return (
    <div className="App">
      <header className="App-header ">
        <img src={logo} className="App-logo bg-yellow-400" alt="logo" />
        <BlueP>
          Edit <code>src/App.tsx</code> and save to reload.
        </BlueP>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
