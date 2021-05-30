const { Item } = require("../models");

const authorization = (req, res, next) => {
  const { id } = req.params;
  Item.findOne({
    where: { id },
  })
    .then((item) => {
      if (item.UserId === req.userId) {
        next();
      } else {
        throw {
          name: "UnauthorizedError",
          statusCode: 403,
          message: "Not authorized to do this action",
        };
      }
    })
    .catch((err) => {
      err = {
        name: "NotFoundError",
        statusCode: 404,
        message: "Item cannot be found",
      };
      next(err);
    });
};

module.exports = authorization;
