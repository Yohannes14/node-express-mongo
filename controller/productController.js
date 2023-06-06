const asyncHandler = require("express-async-handler");

const Product = require("../modal/products");
//desc  Get Products
//@route Get /api/products
//@access Private

const getProducts = asyncHandler(async (req, res) => {
  console.log('product')
  const products = await Product.find();
  res.status(200).json(products);
});

//desc  Get Products by id
//@route Get /api/products
//@access Private

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.findOne({ _id: req.params.id });
  res.status(200).json(products);
});

//desc  post Products
//@route post /api/product
//@access Private
const postProduct = asyncHandler(async (req, res) => {
  console.log('post product')
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const product = await Product({
    name: "name",
    description: "des",
    price: 123,
    inStock: false,
  });

  product.save();

  res.status(200).json(product);
});

//desc  Update Products
//@route Update /api/products
//@access Private

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ message: "Products updated successfully" });
});

//desc  Delete Product
//@route Delete /api/products
//@access Private
const delteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  await product.remove();
  res.status(200).json({ message: `Deleted!` });
});

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  delteProduct,
};
