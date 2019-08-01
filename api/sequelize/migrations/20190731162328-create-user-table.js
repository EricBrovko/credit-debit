"use strict";

const { generateHashPassword } = require("../../app/utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      hashedPassword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.BIGINT
      }
    });

    const password = "admin";
    const hashPassword = await generateHashPassword(password);

    await queryInterface.sequelize.query(`
      INSERT INTO users VALUES \
        (1, \"Admin\", \"admin@dot.com\", \
        "${hashPassword}", 1, 1564601289151, 1564601289151);
    `);
  },
  down: (queryInterface) => queryInterface.dropTable("users")
};
