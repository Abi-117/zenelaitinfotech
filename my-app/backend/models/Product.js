import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  slug: String,        // billing, saas, crm...
  name: String,        // Billing Software
  label: String,
  title: String,
  desc: String,
  benefits: [String],
});

export default mongoose.model("Product", ProductSchema);
