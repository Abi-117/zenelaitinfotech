import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const erpSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,

  features: [String],
  perfectFor: [cardSchema],
  why: [cardSchema],
});

export default mongoose.model("Erp", erpSchema);
