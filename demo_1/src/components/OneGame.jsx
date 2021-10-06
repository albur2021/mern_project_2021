import axios from "axios";
import React, { useState, useEffect } from "react";

const OneGame = (props) => {
  const [oneGame, setOneGame] = useState({});
  useEffect(() => {
    
    axios.get(`http://localhost:8000/api/game/${props.id}`)
      .then((res) => setOneGame(res.data.game));
  }, []);
  return (
    <div>
      <h1 className="jumbotron">Viewing {oneGame.title}!</h1>
      <h1>{oneGame.title}</h1>
      <h1>Placeholder for a game!</h1>
      <h2>Price: ${oneGame.price}</h2>
      <h2>Genre: {oneGame.genre}</h2>
    </div>
  );
};

export default OneGame;
