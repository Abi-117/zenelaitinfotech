import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const saasSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,
  heroImage: String,

  features: [String],
  perfectFor: [cardSchema],
  whyChoose: [cardSchema],
});

export default mongoose.model("Saas", saasSchema);
