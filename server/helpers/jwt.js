const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
