"use strict";


const apiCore = require("../helpers/apiCore");
const db = require("../../sequelize/models");

module.exports = {
    list: async (req, res) => {
        const users = await db.User
            .findAll({ raw: true })
            .catch(err => apiCore.sendErrorResponse(req, res, err));

        return apiCore.sendSuccessResponse(req, res, { users });
    }
};
