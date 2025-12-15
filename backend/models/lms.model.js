import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const lmsSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,
  features: [String],
  perfectFor: [cardSchema],
  whyChoose: [cardSchema],
  heroImage: String, // for future image upload
});

export default mongoose.model("LmsPage", lmsSchema);
