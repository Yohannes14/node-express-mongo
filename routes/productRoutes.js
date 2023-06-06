const express = require("express");
const {
  getProducts,
  postProduct,
  updateProduct,
  delteProduct,
  getProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", postProduct);

router.put("/:id", updateProduct);
router.delete("/:id", delteProduct);

module.exports = router;
