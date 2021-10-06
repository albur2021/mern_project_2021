import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [myForm, setMyForm] = useState({
    title: "",
    price: 0.0,
    genre: "",
  });
  const [errors, setErrors] = useState({});
  const onChangeHandler = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/game/new", myForm) //sending Data to BackEnd

      //1. Old Version **Before Error message to Display */
    //   .then(() => props.updated()) //lifting Data up to display in App.js
      // .then(()=> setMyForm({//clearing Form out after being submitted - see the value={myForm.title}
      //     title:"",
      //     price:0.00,
      //     genre:""
      // }))

      //2. ** Current Version - Now using Error message to render Data from the Form */
      .then((res) => {
        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          console.log("It worked!");
          setMyForm({//clearing Form out after being submitted - see the value={myForm.title}
            title: "",
            price: 0.00,
            genre: "",
          });
          props.updated();//- Refreshing Axios and lifting Data up to display in App.js
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
         {
            errors.title ? <span className="text-danger">{errors.title.message} </span> : ""
         }
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
         {
            errors.price ? <span className="text-danger">{errors.price.message} </span> : ""
         }
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
        {
            errors.genre ? <span className="text-danger">{errors.genre.message} </span> : ""
         }
      </div>
      <div className="form-group">
        <input type="submit" value="Add Game" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default Form;
