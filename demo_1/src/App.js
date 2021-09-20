import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";
import Items from "./components/Items";
import Result from "./components/Result";

function App() {
  const [listOfItems, setListOfItems] = useState([]);
  const addItem = (newItem) => {
    setListOfItems([...listOfItems, newItem]);
  };
  const deleteItem = (idx) =>{
    setListOfItems([...listOfItems.slice(0,idx), ...listOfItems.slice(idx +1)]);
  };
  return (
    <div className="container-fluid row">
      <Form addItem={addItem} />
      <Items />Ï
      <div>
        <Result list={listOfItems} deleteItem ={deleteItem}/>
      </div>
    </div>
  );
}

export default App;
