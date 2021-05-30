module.exports = function (err, req, res, next) {
  let statusCode = 500;
  let message = "Internal Server Error!";
  switch (err.name) {
    case "SequelizeValidationError":
      statusCode = 400;
      message = err.errors[0].message;
      break;
    case "SequelizeDatabaseError": //constraint allowNull :false
      if (err.parent.code === "23502") {
        statusCode = 400;
        message = err.errors[0].message;
      }
      break;
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      message = `${err.errors[0].value} already exists`;
      break;
    case "SequelizeForeignKeyConstraintError":
      statusCode = 400;
      message = `ForeignKey error!`;
      break;
    case "NotFoundError":
      statusCode = err.statusCode;
      message = err.message;
      break;
    case "ForbiddenError":
      statusCode = err.statusCode;
      message = err.message;
      break;
    case "UnauthorizedError":
      statusCode = err.statusCode;
      message = err.message;
      break;
    case "BadRequestError":
      statusCode = err.statusCode;
      message = err.message;
      break;
    case "JsonWebTokenError":
      statusCode = 401;
      message = "Failed to authenticate";
      break;
    case "TokenExpiredError":
      statusCode = 401;
      message = "Failed to authenticate";
      break;
    case "AuthenticateError":
      statusCode = 401;
      message = "Failed to authenticate";
      break;
  }
  console.log(message);
  statusCode === 500 && console.log(err.stack);

  res.status(statusCode).json({ message });
};
