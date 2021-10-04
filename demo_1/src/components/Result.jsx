import React, { useState, useEffect } from "react";
import axios from "axios";

const Result = (props) => {
  
  //console.log(props.Type, props.Partic);
  const [res, setRes] = useState({});

  useEffect(() => {
      axios.get(`https://www.boredapi.com/api/activity?type=${props.Type}&participants=${props.Partic}`)
      .then(response => setRes(response.data));
  },[props]);
  return (
    <div>
      <h4>Activity: {res.activity}</h4>
      <h4>Type: {res.type}</h4>
      <h4>Participants #: {res.participants}</h4>
    </div>
  );
};

export default Result;
