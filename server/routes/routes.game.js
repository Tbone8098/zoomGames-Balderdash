const Games = require("express").Router();
const Game = require("../controllers/controllers.game");

// C
Games.post("/new", Game.create);
// R
// U
// D

module.exports = Games;
