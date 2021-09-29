import React, { useState } from "react";

const Form = (props) => {
  const [myForm, setMyForm] = useState({
    Type: "education",
    Participants: 1,
  });
  const options = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  const onChangeHandler = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //send the form up to App.js using a prop
    props.cureBoredom(myForm);
  };

  return (
    <form onSubmit={onSubmitHandler} className="col-6">
      <div className="form-group">
        <label htmlFor="Type">Type of Activity</label>
        />
        <select name="Type" className="form-control" onChange={onChangeHandler} >
          {options.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Participants">No. of Participants</label>
        <input
          type="number"
          name="Participants"
          className="form-control"
          value={myForm.Participants}
          onChange={onChangeHandler}
        />
      </div>
      <input
        type="submit"
        value="Cure boredom"
        className="btn btn-primary form-group"
      />
    </form>
  );
};

export default Form;
