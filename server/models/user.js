"use strict";
const { hashPwd } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user, option) => {
          user.role = "user";
          user.password = hashPwd(user.password);
        },
      },
      sequelize,
    }
  );
  User.associate = function (models) {
    User.belongsToMany(models.Product, { through: models.Item });
    User.hasMany(models.Item);
  };
  return User;
};
