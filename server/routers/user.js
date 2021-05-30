const router = require("express").Router();
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const productController = require("../controllers/productController");
const itemController = require("../controllers/itemController");
const clientAuthorization = require("../middlewares/clientAuthorization");

router.post("/register", userController.register);
router.post("/login", userController.loginCustomer);
router.get("/products", productController.getProducts);
router.use(authentication);
router.post("/item", itemController.createItem);
router.get("/items", itemController.getItems);
router.patch("/item/:id", clientAuthorization, itemController.updateItem);
router.delete("/item/:id", clientAuthorization, itemController.deleteItem);
router.delete("/items", itemController.bulkDelete);

module.exports = router;
