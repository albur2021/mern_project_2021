import React, { useState } from "react";

const Form = (props) => {
    const [myForm, setMyForm] = useState({
        ItemName:"",
        Category:"Grocery",
        Priority:"Low"
    });

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        props.addItem(myForm);
    };
    const onChangeHandler = (e) =>{
        setMyForm({...myForm, [e.target.name]: e.target.value});
    }
    
  return (
    <form className="col-4" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="ItemName">Item Name</label>
        <input type="text" name="ItemName" className="form-control" onChange={onChangeHandler}/>
      </div>
      <div className="form-group">
        <label htmlFor="Category">Category</label>
        <select name="Category" className="form-control" onChange={onChangeHandler}>
          <option value="Grocery">Grocery</option>
          <option value="Electronic">Electronic</option>
          <option value="Personal">Personal</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Priority">Priority</label>
        <select name="Priority" className="form-control" onChange={onChangeHandler}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="form-group">
        <input type="submit" value="+ Add" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default Form;
