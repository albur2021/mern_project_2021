import "./App.css";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import OneGame from "./components/OneGame";
import UpdateForm from "./components/UpdateForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <OneGame path="/game/:id"/>
        <UpdateForm path="/game/update/:id"/>
      </Router>
    </div>
  );
}

export default App;
