import React, { useState } from "react";

const Result = (props) => {
  //styling css:
  const heroBg = {
    backgroundColor: "aqua",
  };
  const villainBg = {
    backgroundColor: "crimson",
  };
  const otherBg = {
    backgroundColor: "goldenrod",
  };
  const isDead = {
    textDecoration: 'line-through'
  };
  const alive = {
      textDecoration: 'none'
  };
  const checkIsAlive = (e) =>{
    // console.log(e.target.value);
    props.updateIsAlive(e.target.value);// have this method from App.js/Parent Comp
  };

 

  return (
    <div className="col">
      {/* {props.myList}  wrong can't render array by using this way!!!*/}

      <h2>List of Characters</h2>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Skill(s)</th>
          <th>Leaning</th>
          <th>Is Alive ?</th>
        </tr>
        <tbody>

          {
            props.myList.map((character, i) => {
                return (
                <tr
                    key={i}
                    style={
                    character.Leaning == "Hero"
                        ? heroBg
                        : character.Leaning == "Villain"
                        ? villainBg
                        : otherBg
                    }
                >
                    <td style={character.isAlive ? alive : isDead}>{character.Alias}</td>
                    <td>{character.Skill}</td>
                    <td>{character.Leaning}</td>
                    <td>{character.isAlive ? "Yes" : "No"}
                        <input 
                        type="checkbox" 
                        name="isAlive" 
                        className="form-control" 
                        checked={character.isAlive}
                        value = {i}
                        onChange={checkIsAlive}/>
                    </td>
                </tr>
                );
            })
          }

        </tbody>
      </table>
    </div>
  );
};

export default Result;
