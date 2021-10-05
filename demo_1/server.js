const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");
// app.get("/",(req, res)=>{
//     res.json({message: "You made a server!"})
// })


//This is explicitly for handling post requests
app.use(express.json(), express.urlencoded({extended:true}));
//Import all the routes from routes.js
const AllMyRoutes = require("./server/routes/animal.routes");
AllMyRoutes(app);


app.listen(port, ()=> console.log(`Running on port ${port}!!`));