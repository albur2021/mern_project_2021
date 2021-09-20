import React, { useState } from "react";

const Form = (props) => {
  return (
    <form className="col-4">
      <div className="form-group">
        <label htmlFor="ItemName">Item Name</label>
        <input type="text" name="ItemName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="Category">Category</label>
        <select name="Category" className="form-control">
          <option value="Grocery">Grocery</option>
          <option value="Electronic">Electronic</option>
          <option value="Personal">Personal</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Priority">Priority</label>
        <select name="Priority" className="form-control">
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
