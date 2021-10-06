const mongoose = require("mongoose");

//I want to make a model, or however many models I want
const GameSchema = new mongoose.Schema(
  {
    //Here is where I build the models and validate them
    title: {
      type: String,
      required: [true, "Title is required!"],
      minlength: [2, "The title must be at least 2 characters in length!"],
    },
    price: {
      type: Number,
      required: [true, "Game must have a price!"],
      min: [0, "Price must be a positive number!"],
    },
  
    genre: {
      type: String,
      required: [true, "Genre is required!"],
      minlength: [3, "Genre must be at least 4 characters in length!"],
    },
  },
  { timestamps: true }
); //what time is set up and update models

//Finalizes the Setting up our Model
const Game = mongoose.model("Game", GameSchema);
//Model is exported so we can use it in other places
module.exports = Game;
