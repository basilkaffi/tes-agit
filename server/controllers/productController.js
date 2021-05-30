const { Product, sequelize } = require("../models");
const { queryInterface } = sequelize;

class ProductController {
  static getProducts(req, res, next) {
    Product.findAll({ order: [["id", "ASC"]] })
      .then((products) => {
        res.status(200).json({ products });
      })
      .catch(next);
  }
  static productCreate(req, res, next) {
    const { name, image, price, total, category } = req.body;
    Product.create({
      name,
      image,
      price,
      total,
      category,
    })
      .then((product) => {
        res.status(201).json(product);
      })
      .catch(next);
  }
  static updateProduct(req, res, next) {
    const id = req.params.id;
    const { name, price, image, total, category } = req.body;
    Product.update(
      {
        name,
        image,
        price,
        total,
        category,
      },
      { where: { id } }
    )
      .then((response) => {
        if (response[0] === 1) {
          return Product.findOne({ where: { id } });
        } else {
          throw {
            name: "NotFoundError",
            message: "Product not found",
            status: 404,
          };
        }
      })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch(next);
  }
  static deleteProduct(req, res, next) {
    const id = req.params.id;
    queryInterface
      .bulkDelete("Items", { ProductId: id })
      .then((response) => {
        return Product.destroy({ where: { id } });
      })
      .then((response) => {
        if (response === 1) {
          res.status(200).json({ message: "product has been deleted" });
        } else {
          throw {
            name: "NotFoundError",
            message: "Product cannot be found",
            status: 404,
          };
        }
      })
      .catch(next);
  }
}

module.exports = ProductController;
