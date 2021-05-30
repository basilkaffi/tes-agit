const router = require("express").Router();
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const productController = require("../controllers/productController");
const authorization = require("../middlewares/authorization");

router.post("/login", userController.loginAdmin);
router.use(authentication);
router.post("/product", productController.productCreate);
router.get("/products", productController.getProducts);
router.put("/product/:id", authorization, productController.updateProduct);
router.delete("/product/:id", authorization, productController.deleteProduct);

module.exports = router;
