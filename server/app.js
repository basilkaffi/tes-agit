require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { urlencoded, json } = require("express");
const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/image", express.static("image"));
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server listening at port:", port);
});
