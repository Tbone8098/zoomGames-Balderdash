const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/Balderdash", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log("something went wrong", err));
