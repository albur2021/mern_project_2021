import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  //create a fake database
  const [listOfCharacters, setListOfCharacters] = useState([]);
  // console.log(listOfCharacters);
  const addNew = (myCharacters) => {
    setListOfCharacters([...listOfCharacters, myCharacters]);
  };
  return (
    <div className="App container-flued">
      <h1>List of characters</h1>
      <div className="row">
        {/* apply 'addNew method' here as parameter */}
        <Form newCharacter={addNew} />
        {/* passing down List/Array of characters from Form */}
        <Result myList={listOfCharacters} />
      </div>
    </div>
  );
}

export default App;
