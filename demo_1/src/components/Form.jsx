import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("0");
  const addPet = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    // setName(event.target[0].value);
    console.log(event);
  };
  return (
    <div>
      <h1>Tell me about your pet</h1>
      <form onSubmit={addPet}>
        <div className="form-group">
          <label>Name of Pet</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Type of Pet</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setType(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age of Pet</label>
          <input
            type="number"
            className="form-control"
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
      <h1>Your Pet Info:</h1>
      <h3>Name: {name}</h3>
      <h3>Type: {type}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
};

export default Form;
