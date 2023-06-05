const express = require("express");
const {
  getProducts,
  postProduct,
  updateProduct,
  delteProduct,
} = require("../controller/productController");

const router = express.Router();

router.route("/").get(getProducts).post(postProduct);
router.route("/:id").delete(delteProduct).put(updateProduct);

// router.get("/", getProduct);

// router.post("/", postProduct);

// router.put("/:id", updateProduct);
// router.delete("/:id", delteProduct);

module.exports = router;
