const { Player } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Player.create(req.body)
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err));
    },
    // R
    // U
    // D
};
