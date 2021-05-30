const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

function authentication(req, res, next) {
  const { access_token } = req.headers;
  try {
    let decoded = verifyToken(access_token);
    req.userId = decoded.id;
    User.findByPk(decoded.id)
      .then((user) => {
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;
