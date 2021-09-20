import React, { useState } from "react";

const Result = (props) => {
  const low = {
    backgroundColor: "green",
  
    
  };
  const medium = {
    backgroundColor: "yellow",
   
  };
  const high = {
    backgroundColor: "red",

  };
  return (
    <div>
      {props.list.map((item,i) => {
        return <p style={item.Priority == "Low" ? low : item.Priority == "Medium" ? medium : high}> 
        {item.ItemName}
        <button onClick={()=> props.deleteItem(i)}>X</button>
        </p>;
      })}
    </div>
  );
};

export default Result;
