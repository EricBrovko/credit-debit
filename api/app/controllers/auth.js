"use strict";

const passport = require("passport");
const apiCore = require("../helpers/apiCore");
const authService = require("../services/auth");

module.exports = {
  login: (req, res) => {
    return passport.authenticate("local", (err, user, info) => {
      const error = err || info;

      if (error) {
        return apiCore.sendErrorResponse(
          req, res, error.message,  401
        );
      }
      if (!user) {
        return apiCore.sendErrorResponse(
          req, res, "Unknown user!",  404
        );
      }

      // generate token
      const token = authService.signToken({ id: user.id });

      return apiCore.sendSuccessResponse(req, res, { token });
    })(req, res);
  }
};
