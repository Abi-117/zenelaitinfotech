import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const crmSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  benefits: [String],
  perfectFor: [cardSchema],
  why: [cardSchema],
});

export default mongoose.model("CRM", crmSchema);
