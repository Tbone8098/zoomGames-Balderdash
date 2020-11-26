const { Player } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Player.create(req.body)
            .then((resp) => {
                console.log(resp);
                res.json({
                    msg: "New player created successfully",
                    status: 200,
                    data: resp,
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({
                    msg: "New player created unsuccessfully",
                    status: 500,
                    data: err,
                });
            });
    },
    // R
    getOne: (req, res) => {
        Player.findOne({ _id: req.params.id }).then((resp) => {
            res.json({
                msg: "Player Found",
                status: 200,
                data: resp,
            }).catch((err) => {
                res.json({
                    msg: "Player Not Found",
                    status: 500,
                    data: err,
                });
            });
        });
    },
    // U
    // D
    delete: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then((resp) => {
                res.json({
                    msg: "Player deletion successful",
                    status: 200,
                    data: resp,
                });
            })
            .catch((err) => {
                res.json({
                    msg: "Player deletion unsuccessful",
                    status: 500,
                });
            });
    },
};
