module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "agit_development",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "silmwcpuasvbip",
    password:
      "670a9d2ff26d80c7bd8fda51afba838e71e42d09a2ab59a4d900b30e187a9c5d",
    database: "d6kqmtobgnno76",
    host: "ec2-52-23-45-36.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
