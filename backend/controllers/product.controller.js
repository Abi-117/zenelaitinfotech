import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const saveProduct = async (req, res) => {
  const product = new Product({
    ...req.body,
    image: req.file?.filename,
  });

  await product.save();
  res.json({ message: "Product saved" });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);

  res.json({ message: "Product deleted" });
};
