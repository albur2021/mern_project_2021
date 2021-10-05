//I need to call on the controller when I go to a specific route
const AnimalController = require("../controllers/animal.controller");

module.exports = (app) =>{
    app.get("/api/animals", AnimalController.findAllAnimals);
    app.get("/api/animals/:id",AnimalController.findOneAnimal);
    app.post("/api/animals/new",AnimalController.createAnimal);
    app.put("/api/animals/update/:id", AnimalController.updateAnimal);
    app.delete("/api/animals/delete/:id", AnimalController.deleteAnimal);
};