"use strict";

const { generateHashPassword } = require("../../app/utils");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        // SequelizeValidationError: function (value, next) {
        //   User.find({
        //     where: {email: value}
        //   }).then(function(entry) {
        //     if (entry) {
        //       return next('Email "' + value + '" is already in use');
        //     }

        //     next();
        //   });
        // }
      }
    },
    hashedPassword: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.INTEGER(1)
    },
    createdAt: {
      type: DataTypes.BIGINT
    },
    updatedAt: {
      type: DataTypes.BIGINT
    },
  }, {
      tableName: "users",
      hooks: {
        beforeCreate: function(user, options) {
          user.hashedPassword = generateHashPassword(user.password);
        },
        beforeUpdate: function(user, options) {
          if (user.password && user.password.length) {
            user.hashedPassword = generateHashPassword(user.password);
          }
        }
      },
    });

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
