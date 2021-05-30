const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { comparePwd } = require("../helpers/bcrypt");
const { Op } = require("sequelize");
const emailVerification = require("../helpers/emailVerification");

class UserController {
  static register(req, res, next) {
    const { name, email, password } = req.body;
    User.findOne({
      where: {
        [Op.or]: [{ email }, { name }],
      },
    })
      .then((user) => {
        if (!user) {
          return User.create({
            name,
            email,
            password,
          });
        } else {
          throw {
            errorCode: "registerFailed",
            message: "email or username already exist",
            status: 400,
          };
        }
      })
      .then((user) => {
        emailVerification(email);
        res.status(201).json({ message: "registration success" });
      })
      .catch(next);
  }
  static loginAdmin(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: { email },
    })
      .then((user) => {
        if (user.role === "admin") {
          const isValid = comparePwd(password, user.password);
          if (isValid) {
            const { id, name, email, role } = user;
            const token = generateToken({ id, name, email, role });
            res.status(200).json(token);
          } else {
            throw {
              name: "BadRequestError",
              statusCode: 400,
              message: "email or password is wrong",
            };
          }
        } else {
          throw {
            name: "BadRequestError",
            statusCode: 400,
            message: "user is not admin",
          };
        }
      })
      .catch(next);
  }
  static loginCustomer(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: { email },
    })
      .then((user) => {
        if (user.role === "user") {
          const isValid = comparePwd(password, user.password);
          if (isValid) {
            const { id, name, email, role } = user;
            const token = generateToken({ id, name, email, role });
            res.status(200).json(token);
          } else {
            throw {
              name: "BadRequestError",
              statusCode: 400,
              message: "email or password is wrong",
            };
          }
        } else {
          throw {
            name: "BadRequestError",
            statusCode: 400,
            message: "user is not customer",
          };
        }
      })
      .catch(next);
  }
}
module.exports = UserController;
