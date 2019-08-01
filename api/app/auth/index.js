"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");

const db = require("../../sequelize/models");

// Passport Configuration
require("./passport").init(db.User);

router.use("/", controller.login);

module.exports = router;
