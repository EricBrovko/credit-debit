"use strict";

const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");


module.exports.init = (User) => {
  passport.use(
    "local",
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      async (email, password, done) => {
        const user = await User.findOne({
          where: { email },
          raw: true
        });

        if (!user) {
          return done(null, {}, { message: "This email is not registered." });
        }

        if (email !== user.email) {
          return done(null, null, { message: "This email is not registered" });
        }

        return bcrypt.compare(password, user.hashedPassword, (err, isValid) => {
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
