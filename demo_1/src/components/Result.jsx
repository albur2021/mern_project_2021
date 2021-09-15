import React, { useState } from 'react';


const Result = (props) =>{

return(
  <div className="col">
    {/* {props.myList}  wrong can't render array by using this way!!!*/} 
    
    <h2>List of Characters</h2>
    <table className="table">
        <tr>
            <th>Name</th>
            <th>Skill(s)</th>
            <th>Leaning</th>
        </tr>
        <tbody>
            {
                props.myList.map((character,i)=>{
                    return (
                        <tr key={i}>
                            <td>{character.Alias}</td>
                            <td>{character.Skill}</td>
                            <td>{character.Leaning}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  </div>
  )
}


export default Result;