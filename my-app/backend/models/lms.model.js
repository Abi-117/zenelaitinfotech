import mongoose from "mongoose";

const lmsSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,
  features: [String],
  perfectFor: [
    {
      title: String,
      desc: String
    }
  ],
  benefits: [
    {
      title: String,
      desc: String
    }
  ]
});

export default mongoose.model("Lms", lmsSchema);
