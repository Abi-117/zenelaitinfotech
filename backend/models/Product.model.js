import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true },
    label: String,
    title: String,
    desc: String,
    benefits: [String],
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
