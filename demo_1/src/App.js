import "./App.css";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import { Router } from "@reach/router";
import Param from "./components/Param";
import NewParam from "./components/NewParam";

//Import this dependency from node_module in terminal
//by: npm i @reach/router --force
//Making a new Param to be called - make sure the path is unique and adecvate to its Comp
function App() {
  return (
    <div className="App">
      <Router>
        <First  path="/"/>
        <Second path="/second"/>
        <Third  path="/third"/>
        <Param path="/:num"/>
        <NewParam path="/num/:num"/>
      </Router>
    </div>
  );
}

export default App;
