const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join("./image"),
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, req.userId + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
}).single("myImage");

const uploadImage = (req, res, next) => {
  upload(req, res, (err) => {
    try {
      if (err) {
        console.log(err);
        throw {
          name: "BadRequestError",
          statusCode: 413,
          message: "File Terlalu Besar",
        };
      } else {
        req.body.image = `http://localhost:8000/${req.file.path}`;
        next();
      }
    } catch (err) {
      next(err);
    }
  });
};

module.exports = uploadImage;
