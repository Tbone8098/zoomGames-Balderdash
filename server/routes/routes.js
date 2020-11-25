const controller = require("../controllers/controllers");

module.exports = (app) => {
    app.use("/player", require("./routes.player"));
    app.use("/game", require("./routes.game"));
};
