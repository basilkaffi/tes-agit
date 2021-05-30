"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      ProductId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {}
  );
  Item.associate = function (models) {
    Item.belongsTo(models.Product);
    Item.belongsTo(models.User);
  };
  return Item;
};
