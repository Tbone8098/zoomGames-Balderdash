const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    {
        DisplayName: {
            type: String,
            required: true,
        },
        GameCode: {
            type: String,
        },
        TotalPoints: {
            type: Number,
            default: 0,
        },
        ListOfWords: {
            type: Array,
        },
        ListOfDefinitions: {
            type: Array,
        },
    },
    { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;
