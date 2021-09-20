import React, { useState } from "react";

const Content = (props) => {
  return (
    <div className="box">
      <ul>
        {props.list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Content;
