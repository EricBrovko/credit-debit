"use strict";

const passport = require("passport");
const config = require("config");
const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");

// module.exports.init = (User) => {
module.exports.init = () => {
  passport.use(
    "local",
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      (email, password, done) => {
        // find user in db
        // const user = await User.find({email});
        const { user } = config;

        if (!user) {
          return done(null, {}, { message: "This email is not registered." });
        }

        if (email !== user.email) {
          return done(null, null, { message: "This email is not registered" });
        }

        return bcrypt.compare(password, user.passwordHash, (err, isValid) => {
          if (err || !isValid) {
            return done(
              null, null, { message: "This password is not correct." }
            );
          }

          return done(null, user);
        });
      }
    ));
};
