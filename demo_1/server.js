//Building out my Express BackEnd
const express = require("express");//import express
const app = express();// app - connect all routes
const port = 8000;// port route where you display UI

//Get Data from Post Request
// Important - should be above all codes to make it running !
app.use( express.json());
app.use( express.urlencoded({ extended: true}));

//This backend is primarely for interacting with an API
app.get("/", (req, res)=> {
    res.json({ message: "This is from page"});
});
app.get("/api", (req, res)=> {
    res.json({ message: "Hello from the express backend! This is change! This is applied with nodemon running!"});
});

app.post("/request",(req,res)=>{
    console.log(req.body);
    res.json({status:"ok"});
});
// adding Post with parameters
app.post("/request/:id", (req, res)=>{
    console.log(req.body);
    console.log(req.params.id);
    res.json({status: req.params.id});
});

// We need some code, that  will start our server
app.listen(port,()=> console.log(`Running on port ${port}!!`));

//1. To see the message/response/ from this server, use this command
//http://localhost:8000/api
//2. or from terminal use this command:
// node server.js

//3. To UPDATE any changes on messages from the server you need to Install nodemone, use this command
// npm install -g nodemon
// check version: npm nodemon --version
// to run nodemone to see "This is change!" added to message, use this command:
// nodemon server.js
