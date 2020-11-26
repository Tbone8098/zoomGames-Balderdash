const Games = require("express").Router();
const Game = require("../controllers/controllers.game");

// C
Games.post("/new", Game.create);
// R
Games.get("/:id", Game.getOne);
// U
Games.post("/update/:id", Game.updateOne);
Games.post("/update/addPlayer/:GameCode", Game.addOnePlayer);
Games.post("/update/removePlayer/:id", Game.removePlayer);
// D
Games.post("/delete/:id", Game.delete);

module.exports = Games;
