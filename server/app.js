require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { urlencoded, json } = require("express");
const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/image", express.static("image"));
app.use(router);
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "build")));
app.get("/client", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("server listening at port:", port);
});
