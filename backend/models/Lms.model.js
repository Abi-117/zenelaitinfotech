import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
  },
  { _id: false }
);

const lmsSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroText: String,
    features: [String],
    perfectFor: [itemSchema],
    whyChoose: [itemSchema],
    benefits: [itemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Lms", lmsSchema);
