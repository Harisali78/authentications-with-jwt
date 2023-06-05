const productModel = require("../models/productModel");
exports.getProducts = async (req, res) => {
  const data = await productModel.find();
  res.status(200).json({
    success: true,
    data,
  });
};
exports.createProduct = (req, res) => {
  const data = productModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product Created Successfully",
    data,
  });
};
exports.productDetails = async (req, res) => {
  const id = req.params.id;
  const data = await productModel.findById(id);
  res.status(200).json({
    success: true,
    data,
  });
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await productModel.findByIdAndUpdate(id, body, { new: true });
  res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
    product,
  });
};
exports.deletedProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findByIdAndDelete(id)
  res.status(200).json({
    success: true,
    message: `Product with ${id} has been deleted succesfully`,
  });
};
// Optional Convention
// module.exports = {
//   getProducts,
//   createProduct,
//   productDetails,
//   updateProduct,
//   deletedProduct,
// };
