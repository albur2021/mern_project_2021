const Game = require("../models/game.models");

//BASIC CRUD COMMANDS

//READ - FIND ONE
module.exports.findOneGame = (req, res) =>{
    Game.findOne({_id: req.params.id})
        .then(singleGame => res.json({game: singleGame}))
        .catch(err => res.json({message:"Smthg went wrong when finding one Game", error:err }));
};
//READ - FIND ALL
module.exports.findAllGames = (req, res) => {
  //db.collection_name.query()
  //db.Game_facts()
  Game.find()
    .then((allGames) => res.json({ game: allGames }))
    .catch((err) =>
      res.json({ message: "Something went wrong when finding all", error: err })
    );
};
//CREATE
module.exports.createGame = (req, res)=>{
    Game.create(req.body)
        .then(newGame => res.json({game: newGame}))
        .catch(err => res.json({message: "Something went wrong when adding an Game", error:err}))
}
//UPDATE
module.exports.updateGame = (req, res)=>{        //{runValidators:true} - is boilerplate for displaying errors         
    Game.findOneAndUpdate({_id: req.params.id}, req.body,{runValidators:true})
        .then(updatedGame => res.json({game: updatedGame}))
        .catch(err => res.json({message: "Something went wrong when updating the games!", error: err}))
}
//DELETE
module.exports.deleteGame = (req, res)=>{
    Game.deleteOne({_id: req.params.id})
        .then(res.json({message:"Game was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong when trying to delete!", error: err}))
}
