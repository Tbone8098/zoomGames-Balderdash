const Players = require("express").Router();
const Player = require("../controllers/controllers.player");

// C
Players.post("/new", Player.create);
// R
Players.get("/:id", Player.getOne);
// U
// D
Players.post("/delete/:id", Player.delete);

module.exports = Players;
