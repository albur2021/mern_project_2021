import { Link } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";

const Table = (props) => {
  const deleteFromTable = (id) => {
    axios
      .delete(`http://localhost:8000/api/game/delete/${id}`)
      .then(() => props.updated())
      .catch((err) => console.log(err));
  };
  return (
    <div className="col">
      <table className="table table-bordered">
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
        {/* render data here */}
        {props.games.map((item, i) => {
          return (
            <tr>
              <td>
                <Link to={`game/${item._id}`}>{item.title}</Link>
              </td>
              <td>{item.price}</td>
              <td>{item.genre}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFromTable(item._id)}
                >
                  &times;
                </button>
                <button className="btn btn-info">
                  <Link to={`game/update/${item._id}`}>Update</Link>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
