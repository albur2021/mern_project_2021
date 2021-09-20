import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = (props) =>{
    const [fox, setFox] = useState({});
    //prevents from calling API many times (side effects), 
    //and runs only one time
    // useEffect(() =>{
    //     fetch("https://randomfox.ca/floof/")
    //     .then(response => response.json())
    //     .then(response => setFox(response))
    //     .then(err => console.log(err))
    // },[]);
    
    //Axios is used to communicate with the backend 
    //also supports the Promise API that is native to JS ES6
    // It is a library which is used to make requests to an API, return data from the API,
    //and then do things with that data in our React applicatio
   useEffect(()=>{
       axios.get("https://randomfox.ca/floof/")
       .then(response => setFox(response.data));
   },[]);
    return(
    <div>
        <h1>Test</h1>
        <img src={fox.image} alt="Image of fox"/>
        
    </div>
    )
    }


export default ApiCall;