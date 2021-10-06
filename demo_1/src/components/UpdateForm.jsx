import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const UpdateForm = (props) => {
  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/game/${props.id}`)
      .then((res) => setMyForm(res.data.game));
  }, []);
  const [myForm, setMyForm] = useState({});
  const [oneGame, setOneGame] = useState({});

  const [errors, setErrors] = useState({});
  const onChangeHandler = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/game/update/${props.id}`, myForm) //sending Data to BackEnd


      //2. ** Current Version - Now using Error message to render Data from the Form */
      .then((res) => {
        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          console.log("It worked!");
          navigate("/");
        }
      })
      .catch((err) =>
        console.log("Something went wrong with the post request", err)
      );
  };
  return (
    <form className="col" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          className="form-control"
          onChange={onChangeHandler}
          value={myForm.title}
        />
        {errors.title ? (
          <span className="text-danger">{errors.title.message} </span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          className="form-control"
          onChange={onChangeHandler}
          value={myForm.price}
        />
        {errors.price ? (
          <span className="text-danger">{errors.price.message} </span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          name="genre"
          type="text"
          className="form-control"
          onChange={onChangeHandler}
          value={myForm.genre}
        />
        {errors.genre ? (
          <span className="text-danger">{errors.genre.message} </span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <input type="submit" value="Update Game" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default UpdateForm;
