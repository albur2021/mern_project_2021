import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import Result from "./components/Result";


function App() {
  return (
    <div className="App container-flued">
      <h1>List of characters</h1>
      <div className="row">
        <Form />
        <Result/>
      </div>
    </div>
  );
}

export default App;
