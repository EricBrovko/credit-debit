"use strict";

const { Op } = require("sequelize");
const logger = require("log4js").getLogger("[app.sequelize.config]");
logger.level = "debug";

logger.info(`Sequelize uses ${process.env.NODE_ENV} env`);

module.exports = {
    development: {
        username: "root",
        password: "eric678744",
        database: "credit",
        host: `${process.env.DB_HOST || "localhost"}`,
        port: "3306",
        dialect: "mysql",
        operatorsAliases: Op,
        logging: false,
    },
    staging: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: "3306",
        dialect: "mysql",
        operatorsAliases: Op,
        logging: true
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: "3306",
        dialect: "mysql",
        operatorsAliases: Op,
        logging: true
    },
};
