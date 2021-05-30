const { User } = require("../models");

const authorization = (req, res, next) => {
  User.findByPk(req.userId)
    .then((user) => {
      if (user.role === "admin") {
        next();
      } else {
        throw {
          name: "UnauthorizedError",
          statusCode: 403,
          message: "Not authorized to do this action",
        };
      }
    })
    .catch(next);
};

module.exports = authorization;
