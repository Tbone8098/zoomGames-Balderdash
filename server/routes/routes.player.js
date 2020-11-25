const Players = require("express").Router();
const Player = require("../controllers/controllers.player");

// C
Players.post("/new", Player.create);
// R
// U
// D

module.exports = Players;
