const Games = require("express").Router();
const Game = require("../controllers/controllers.game");

// C
Games.post("/new", Game.create);
// R
Games.post("/update/:id", Game.updateOne);
Games.post("/update/player/:GameCode", Game.addOnePlayer);
// U
// D

module.exports = Games;
