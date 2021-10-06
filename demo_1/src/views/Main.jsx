import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import axios from "axios";

const Main = (props) => {
  const [games, setGames] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    //connecting to Data base
  
    axios.get("http://localhost:8000/api/game") //pull that data by axios
      .then((res) => setGames(res.data.game));
  }, [update]); //constantly updated - dependency
  const formWasUpdated = (item) => {
    setUpdate(!update);
  };
  return (
    <div>
      <h1 className="jumbotron">Add a Game!</h1>
      <div className="row container">
        <Form updated={formWasUpdated} />
        <Table games={games} updated={formWasUpdated} />
      </div>
    </div>
  );
};

export default Main;
