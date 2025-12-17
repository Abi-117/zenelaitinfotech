import Product from "../models/product.model.js";

/* ================= GET ================= */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= CREATE ================= */
export const saveProduct = async (req, res) => {
  try {
    // frontend la JSON string ah "data" key la anuppreenga
    const data = JSON.parse(req.body.data);

    const product = new Product({
      ...data,
      image: req.file ? req.file.filename : "",
    });

    await product.save();
    res.json({ message: "Product saved", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= UPDATE ================= */
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = JSON.parse(req.body.data);

    if (req.file) {
      data.image = req.file.filename;
    }

    const updated = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.json({ message: "Product updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= DELETE ================= */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
