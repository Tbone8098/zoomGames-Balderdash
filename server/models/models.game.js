const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        GameCode: {
            type: String,
            required: true,
        },
        Participants: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player",
        },
        Turn: {
            Word: String,
            Leader: String,
            ListOfDefinitions: {},
            Answer: {},
        },
    },
    { timestamps: true }
);

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
