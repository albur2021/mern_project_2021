import React, { useEffect, useState } from 'react';


const ApiCall = (props) =>{
    const [fox, setFox] = useState({});
    //prevents from calling API many times (side effects), 
    //and runs only one time
    useEffect(() =>{
        fetch("https://randomfox.ca/floof/")
        .then(response => response.json())
        .then(response => setFox(response))
        .then(err => console.log(err))
    },[]);
   
    return(
    <div>
        <h1>Test</h1>
        <img src={fox.image} alt="Image of fox"/>
        
    </div>
    )
    }


export default ApiCall;