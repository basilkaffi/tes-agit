const { Item, Product, sequelize } = require("../models");
const { queryInterface } = sequelize;

class ItemController {
  static getItems(req, res, next) {
    Item.findAll({
      where: { UserId: req.userId },
      include: Product,
      attributes: ["id", "ProductId", "UserId", "total"],
    })
      .then((items) => {
        res.status(200).json({ items });
      })
      .catch(next);
  }
  static createItem(req, res, next) {
    const { ProductId, total } = req.body;
    let newItem = null;
    Item.create({
      ProductId,
      UserId: req.userId,
      total,
    })
      .then((data) => {
        newItem = data;
        return Product.findOne({ where: { id: ProductId } });
      })
      .then((data) => {
        let newTotal = data.total - total;
        return Product.update(
          { total: newTotal },
          { where: { id: ProductId } }
        );
      })
      .then((response) => {
        if (response[0] === 1) {
          res.status(200).json(newItem);
        } else {
          throw {
            name: "NotFoundError",
            message: "Product not found",
            status: 404,
          };
        }
      })
      .catch(next);
  }
  static updateItem(req, res, next) {
    const { id } = req.params;
    const { total, change, symbol, ProductId } = req.body;
    Item.update({ total }, { where: { id } })
      .then((response) => {
        if (response[0] === 1) {
          return Product.findOne({ where: { id: ProductId } });
        } else {
          throw {
            name: "NotFoundError",
            message: "Item not found",
            status: 404,
          };
        }
      })
      .then((data) => {
        let newTotal = data.total;
        if (symbol === "+") {
          newTotal -= change;
        } else if (symbol === "-") {
          newTotal += change;
        }
        return Product.update(
          { total: newTotal },
          { where: { id: ProductId } }
        );
      })
      .then((response) => {
        if (response[0] === 1) {
          res.status(200).json({ message: "item has been updated" });
        } else {
          throw {
            name: "NotFoundError",
            message: "Product not found",
            status: 404,
          };
        }
      })
      .catch(next);
  }
  static deleteItem(req, res, next) {
    const id = req.params.id;
    Item.destroy({ where: { id } })
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: "item has been deleted" });
        } else {
          throw {
            name: "NotFoundError",
            message: "Item cannot be found",
            status: 404,
          };
        }
      })
      .catch(next);
  }
  static bulkDelete(req, res, next) {
    queryInterface
      .bulkDelete("Items", {
        UserId: req.userId,
      })
      .then((response) => {
        res.status(200).json({ message: "items has been deleted" });
      })
      .catch(next);
  }
}

module.exports = ItemController;
