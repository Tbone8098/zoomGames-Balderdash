const { Game, Player } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Game.create(req.body)
            .then((resp) => {
                console.log(resp);
                res.json({
                    msg: "Game Successfully created",
                    status: 200,
                    data: resp,
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({ msg: "Game unsuccessfully created", status: 500 });
            });
    },
    // R
    getOne: (req, res) => {
        Game.findOne({ _id: req.params.id }).then((resp) => {
            res.json({
                msg: "Game Found",
                status: 200,
                data: resp,
            }).catch((err) => {
                res.json({
                    msg: "Game Not Found",
                    status: 500,
                    data: err,
                });
            });
        });
    },
    // U
    updateOne: (req, res) => {
        Game.findOneAndUpdate({ GameCode: req.body.GameCode }, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        })
            .then((resp) => {
                console.log(resp);
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
    },
    addOnePlayer: (req, res) => {
        console.log(req.body.id);
        Player.findOne({ _id: req.body.id })
            .then((playerResp) => {
                console.log("playerResp");
                console.log(playerResp);
                if (playerResp == null) {
                    res.json({ msg: "Player not found", status: 500 });
                    return;
                }
                Game.findOneAndUpdate(
                    { GameCode: req.params.GameCode },
                    {
                        $addToSet: { Participants: playerResp },
                    },
                    {
                        new: true,
                        useFindAndModify: false,
                        runValidators: true,
                    }
                )
                    .populate("Participants")
                    .then((gameResp) => {
                        if (gameResp == null) {
                            res.json({
                                msg: "update unsuccessful",
                                status: 500,
                            });
                        }
                        res.json({
                            msg: "update successful",
                            status: 200,
                            data: gameResp,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({
                            msg: "failed to update",
                            status: 500,
                            data: err,
                        });
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    removePlayer: (req, res) => {
        Game.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { Participants: req.body.playerId } },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        )
            .populate("Participants")
            .then((resp) => {
                console.log(resp);
                res.json({
                    msg: "Player removed successfully",
                    status: 200,
                    data: resp,
                });
            })
            .catch((err) => {
                res.json({
                    msg: "Player removed unsuccessfully",
                    status: 500,
                    data: err,
                });
            });
    },

    // D
    delete: (req, res) => {
        Game.deleteOne({ _id: req.params.id })
            .then((resp) => {
                let msg = "Game deleted successfully";
                console.log(msg);
                res.json({
                    msg: msg,
                    status: 200,
                });
            })
            .catch((err) => {
                res.json({
                    msg: "Game deletion unsuccessfully",
                    status: 500,
                });
            });
    },
};
