import { Link } from '@reach/router';
import React, { useState } from 'react';


const Second = (props) =>{

return(
  <div>
    <h1>Test 2</h1>
    {/* {/* <a href="/third"> Go to Third Page</a> using this way is no good, it does refresh the single page/*} */}
    <Link to="/third"> 
    <button> Go to Third Page</button>
    </Link>
    
  </div>
  )
}


export default Second;