const express = require("express");
const {
  getProducts,
  createProduct,
  productDetails,
  updateProduct,
  deletedProduct,
} = require("../controllers/product");
const router = express.Router();

router.get("/products", getProducts);
router.post("/createProduct", createProduct);
router.get("/product/:id", productDetails);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deletedProduct);

module.exports = router;
