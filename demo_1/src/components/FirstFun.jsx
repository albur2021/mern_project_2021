import React, { useState } from 'react';


const FirstFun = (props) =>{
    const [count, setCount] = useState(10);
    

return(
  <div>
    <h1>Test from the First Component</h1>
    <h2>Your lucky number is: {props.lucky}</h2>
    <h3>Your name: {props.name}</h3>
    <h4>Count: {count}</h4>
    <button onClick={()=>setCount(count +1)}>+1</button>
  </div>
  )
}


export default FirstFun;