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

    // U
    // D
};
