
const mongoose = require("mongoose");

//I want to make a model, or however many models I want
const AnimalSchema = new mongoose.Schema({
    //Here is where I build the model
    animal: String,
    fact: String
});

//Finalizes the Setting up our Model
const Animal = mongoose.model("Animal", AnimalSchema);
//Model is exported so we can use it in other places
module.exports = Animal;

