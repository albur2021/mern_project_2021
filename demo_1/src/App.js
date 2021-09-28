import "./App.css";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import { Router } from "@reach/router";

//Import this dependency from node_module in terminal
//by: npm i @reach/router --force
function App() {
  return (
    <div className="App">
      <Router>
        <First  path="/"/>
        <Second path="/second"/>
        <Third  path="/third"/>
      </Router>
    </div>
  );
}

export default App;
