"use strict";

const APP_SECRET_KEY = "Credit/Debit-4B82-809C-5C96034DACD-89";
const APP_SESSION_KEY = "T0pSec$ret$3cR3t";
const APP_PORT = 3000;

module.exports = {
  app: {
    port: APP_PORT,
    session: {
      tokenValidityTime: 60 * 60 * 24, //24 hours //should be a number of seconds or string representing a timespan eg: "1d", "20h", 60')
      secret: APP_SESSION_KEY
    }
  },
  user: {
    id: 1,
    email: "admin@dot.com",
    passwordHash: "$2b$10$EXsDIA6ygevXwl4VqwuJ4ePRPsMcl5u6rxNn7OYHSnT1xYuVHQ4g2" // admin
  },
  apiKey: APP_SECRET_KEY
};
