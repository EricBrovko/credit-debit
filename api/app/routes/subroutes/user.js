"use strict";

const express = require("express");
const controllers = require("../../controllers/user");
const router = express.Router();

router.get("/list", controllers.list);

module.exports = router;
