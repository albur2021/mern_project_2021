import "./App.css";
import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {

  const [myType, setMyType] = useState("education");
  const [myPart, setMyPart] = useState(1);

  //updating before passing down to Result Comp
  const findActivity = (form) =>{
    setMyType(form.Type);//make sure that object's name is matched to object's name from Form
    setMyPart(form.Participants);//make sure that object's name is matched to object's name from Form
    navigate("/result");//passing through the router to Result Comp
  };
  return (
    <div className="container">
      <h1 className="jumbotron">Cure your boredom</h1>
      <Form cureBoredom={findActivity}/>
      <Router>
        <Result path="/result" Type={myType} Partic={myPart}/>
      </Router>
    </div>
  );
}

export default App;
