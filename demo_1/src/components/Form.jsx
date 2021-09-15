import React, { useState } from 'react';


const Form = (props) =>{
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleValid, setTitleValid] = useState("");
    const [descValid, setDescValid] = useState("");
    const myFormData = (e) =>{
        e.preventDefault();
        
    };
  
    const handleTitle = (e) =>{
        setTitle(e.target.value);
          //validation funciton
        if(e.target.value.length < 1){
            setTitleValid("Title can not be Empty!");
        }else if( e.target.value.length > 10){
            setTitleValid("The title is no longer than 10 characters!")
        }else{
            setTitleValid("");
        }
    };
    const handleDescription = (e) =>{
        setDescription(e.target.value);
          //validation funciton
        if(e.target.value.length < 1){
            setDescValid("Description can not be Empty!");
        }else if( e.target.value.length < 10){
            setDescValid("The description is NOT ENOUGH!");
        }else{
            setDescValid("");
        }
    };

return(
  <div>
    <form onSubmit = { myFormData }>
        <div className="form-group">
            <label htmlFor="Title">Title</label>
            <input type="text" name="Title" className="form-control" onChange={ handleTitle }/>
            <p className="text-danger">{ titleValid }</p>
        </div>
        <div className="form-group">
            <label htmlFor="Description">Description</label>
            <input type="text" name="Description" className="form-control" onChange={ handleDescription }/>
            <p className="text-danger">{ descValid }</p>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary mt-2"/>
    </form>
    <h1>Your Titles:</h1>
    <h3>Title: { title }</h3>
    <h3>Description: { description }</h3>
  </div>
  )
}


export default Form;