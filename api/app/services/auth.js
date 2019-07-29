"use strict";

const config = require("config");
const jwt = require("jsonwebtoken");

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(data) {
  const { app: { session: {
    secret, tokenValidityTime
  } } } = config;

  return jwt.sign(
    data, secret, { expiresIn: tokenValidityTime || 60 * 60 * 5 }
  );
}


module.exports.signToken = signToken;
