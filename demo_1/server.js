//npm i faker - generating free Data
//Faker API it's a collection of completely free APIs that helps web developers and web designers generate fake data in a fast and easy way.
const express = require("express");//import
const app = express();
const port = 8000;
const faker = require("faker");//import 

app.use( express.json());
app.use( express.json());
//console.log(`My dog's name is: ${faker.name.firstName()}, and dog's spiece is: ${faker.animal.dog()}`);

class Dog {
  constructor() {
    this.name = faker.name.firstName();
    this.breed = faker.animal.dog();
  }
}
class Crocodile {
  constructor() {
    this.name = faker.name.firstName();
    this.breed = faker.animal.crocodilia();
  }
}
app.get("/dog", (req, res) => {
  const dog = new Dog();
  const croco = new Crocodile();
  res.json(dog);
  res.json(croco);
});
app.get("/croco", (req, res) => {
  const croco = new Crocodile();
  res.json(croco);
});

// Displaying multiple Items/Classes
app.get("/", (req, res) => {
    const croco = new Crocodile();
    const dog = new Dog();
    res.json({dog: dog, croco: croco});
})

app.listen(port, () => console.log(`Listening on port ${port}!`));
