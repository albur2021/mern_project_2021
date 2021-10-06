//brings mongoose into my project
const mongoose = require("mongoose");

//Mongoose gives me an easy way to connect to the MongoDB database
mongoose.connect("mongodb://localhost/full_stack_october_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("I have connected to the database using mongoose!"))
    .catch(err => console.log("Oh no! Something went wrong connecting to the database with mongoose!",err));
