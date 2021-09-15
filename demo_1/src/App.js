import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FirstFun from "./components/FirstFun";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
     {/* <FirstFun lucky={7} name="Nichole"/> */}
     <Form/>
    </div>
  );
}

export default App;
