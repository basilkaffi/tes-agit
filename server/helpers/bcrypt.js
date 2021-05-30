const bcrypt = require("bcryptjs");

const hashPwd = (password) => {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT));
  return bcrypt.hashSync(password, salt);
};

const comparePwd = (password, hashedPwd) => {
  return bcrypt.compareSync(password, hashedPwd);
};

module.exports = {
  hashPwd,
  comparePwd,
};
