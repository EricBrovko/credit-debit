"use strict";

const logger = require("log4js").getLogger("[Credit/Debit APP]");
logger.level = "debug";
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const config = require("config");

const app = express();
const port = process.env.PORT || config.app.port;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => res.send("OK"));

require("./routes/index")(app);

app.listen(port, () => logger.info(`App listening on port ${port}`));

module.exports = app;
