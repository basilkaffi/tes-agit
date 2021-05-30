"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {}
  );
  Product.associate = function (models) {
    Product.belongsToMany(models.User, { through: models.Item });
    Product.hasMany(models.Item);
  };
  return Product;
};
