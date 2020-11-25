const { Game, Player } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Game.create(req.body)
            .then((resp) => {
                console.log(resp);
                res.json({ msg: "Game Successfully created", status: 200 });
            })
            .catch((err) => {
                console.log(err);
                res.json({ msg: "Game unsuccessfully created", status: 500 });
            });
    },
    // R
    updateOne: (req, res) => {
        Game.findOneAndUpdate({ GameCode: req.body.GameCode }, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        })
            .then((resp) => {
                console.log(resp);
                res.json({
                    msg: "update successfull",
                    status: 200,
                    data: resp,
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({ msg: "failed to update", status: 500, data: err });
            });
    },
    addOnePlayer: async (req, res) => {
        console.log(req.body.id);
        const player = await Player.find({ _id: req.body.id })
            .then((resp) => {
                if (resp == null) {
                    res.json({ msg: "Player not found", status: 500 });
                    return;
                }
            })
            .catch((err) => {
                console.log(err);
            });
        const game = await Game.findOneAndUpdate(
            { GameCode: req.params.GameCode },
            {
                $addToSet: { Participants: player },
            },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        )
            .then((resp) => {
                if (resp == null) {
                    res.json({
                        msg: "update unsuccessful",
                        status: 500,
                    });
                }
                res.json({
                    msg: "update successful",
                    status: 200,
                    data: resp,
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({ msg: "failed to update", status: 500, data: err });
            });
        return game;
    },
    // U
    // D
};
