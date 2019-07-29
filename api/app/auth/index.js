"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");

// Passport Configuration
// require("./passport").init(db.User, config);
require("./passport").init({}, {});

router.use("/", controller.login);


module.exports = router;
