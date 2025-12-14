import mongoose from "mongoose";

const ErpSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,
  whatsapp: String,
  featuresTitle: String,
  features: [String],
  featureImage: String,
  perfectFor: [{ title: String, text: String }],
  whyTitle: String,
  why: [{ title: String, text: String }],
});

export default mongoose.model("Erp", ErpSchema);
