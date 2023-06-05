const asyncHandler = require("express-async-handler");

//desc  Get Products
//@route Get /api/products
//@access Private

const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//desc  post Products
//@route post /api/product
//@access Private
const postProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "Set Products" });
});

//desc  Update Products
//@route Update /api/products
//@access Private

const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update product ${req.params.id}` });
});

//desc  Delete Product
//@route Delete /api/products
//@access Private
const delteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}` });
});

module.exports = { getProducts, postProduct, updateProduct, delteProduct };
