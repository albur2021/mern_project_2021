//I need to call on the controller when I go to a specific route
const GameController = require("../controllers/game.controller");

module.exports = (app) =>{
    app.get("/api/game", GameController.findAllGames);
    app.get("/api/game/:id",GameController.findOneGame);
    app.post("/api/game/new",GameController.createGame);
    app.put("/api/game/update/:id", GameController.updateGame);
    app.delete("/api/game/delete/:id",GameController.deleteGame);
};