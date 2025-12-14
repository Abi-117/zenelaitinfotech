import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: String,
  desc: String
});

const billingSchema = new mongoose.Schema({
  title: String,
  subtitle: String,

  benefits: [String],

  perfectFor: [cardSchema],
  why: [cardSchema],

  industries: [String],

  reportsSubtitle: String,
  reports: [String],

  supportTitle: String,
  supportDesc: String
});

export default mongoose.model("Billing", billingSchema);
