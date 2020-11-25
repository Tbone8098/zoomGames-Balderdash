const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
// const cookieParser = require("cookie-parser");

// require("dotenv").config();
require("./config/mongoose.config");

// use the cors function
// app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json()); //Make sure that the .json has the ()!!
app.use(express.urlencoded({ extended: true }));

require("./routes/routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
