const { Game } = require("../models/models");

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
    // U
    // D
};
