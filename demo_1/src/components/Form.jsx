import React, { useState } from 'react';


const Form = (props) =>{
    // const [Name, setName] = useState("");
    // const [Skill, setSkill] = useState("");
    // const [Leaning, setLeaning] = useState("Hero");
    // Here is another way to store/update Data from user's input
    const [myForm, setMyForm] = useState({
        Alias:"",
        Skill:"",
        Leaning:""
    });

    const onChangeHandler = (e) =>{
        // console.log(e.target.name);
        // 1. copy form; 2. update the form by using hooks/attribute - name (stored in array) and to pull the exact Data from exact input
        setMyForm(
            {
            ...myForm, 
            [e.target.name]: e.target.value
        }
            );
    };
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        //Lifting the Data up from Form Box to App.js to lender That Data to Result Comp
        // Because 'siblings like Form and Result cannot share data between, it's only Parent/App.js might delegate/spread the Data among Child Comps
        props.newCharacter(myForm);
    }
    return(
    <form className="col" onSubmit={ onSubmitHandler }>
        
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Alias" className="form-control" onChange={ onChangeHandler }/>
        </div>
        <div className="form-group">
            <label htmlFor="Skill">Skill</label>
            <input type="text" name="Skill" className="form-control" onChange={ onChangeHandler }/>
        </div>
        <div className="form-group">
            <label htmlFor="Leaning">Leaning</label>
            <select name="Leaning" className="form-control" onChange={ onChangeHandler }>
                <option value="Hero">Hero</option>
                <option value="Villain">Villain</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="form-group">
            <input type="submit" value="+ Add" className="btn btn-primary"/>
        </div>
        <h3>Name: { myForm.Alias }</h3>
        <h3>Skill: { myForm.Skill }</h3>
        <h3>Leaning: { myForm.Leaning }</h3>
    </form> 
    )
}


export default Form;