const Animal = require("../models/animal.models");

//BASIC CRUD COMMANDS

//READ - FIND ONE
module.exports.findOneAnimal = (req, res) =>{
    Animal.findOne({_id: req.params.id})
        .then(singleAnimal => res.json({animal: singleAnimal}))
        .catch(err => res.json({message:"Smthg went wrong when finding one animal", error:err }));
};
//READ - FIND ALL
module.exports.findAllAnimals = (req, res) => {
  //db.collection_name.query()
  //db.animal_facts()
  Animal.find()
    .then((allAnimals) => res.json({ animals: allAnimals }))
    .catch((err) =>
      res.json({ message: "Something went wrong when finding all", error: err })
    );
};
//CREATE
module.exports.createAnimal = (req, res)=>{
    Animal.create(req.body)
        .then(newAnimal => res.json({animal: newAnimal}))
        .catch(err => res.json({message: "Something went wrong when adding an animal", error:err}))
}
//UPDATE
module.exports.updateAnimal = (req, res)=>{
    Animal.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true })
        .then(updatedAnimal => res.json({animal: updatedAnimal}))
        .catch(err => res.json({message: "Something went wrong when updating the animal!", error: err}))
}
//DELETE
module.exports.deleteAnimal = (req, res)=>{
    Animal.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong when trying to delete!", error: err}))
}
