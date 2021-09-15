import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Header>
        <Card lucky={5} word="hello" />
        <Wrapper>
          <Card lucky={10} word="world" />
        </Wrapper>

        <Card lucky={7} word="code" />
        <Card lucky={2} word="lucky" />
      </Header>
      <Card lucky={3} word="footer" />
      <Card lucky={19} word="footer1" />
      <button onClick={() => alert("you clicked your first BUTTON!")}>
        Click me!
      </button>
    </div>
  );
}

export default App;
