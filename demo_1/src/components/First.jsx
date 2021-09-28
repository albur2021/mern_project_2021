import React, { useState } from 'react';
import { navigate } from '@reach/router';

const First = (props) =>{
    const click = () =>{
        navigate("/third");
    }
    return(
    <div>
        <button onClick={ click }>Test 1@</button>
    </div>
    )
}


export default First;