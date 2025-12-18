import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },
  icon: { type: String },
});

const LandingSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroHighlight: String,
    heroServices: String,
    heroTrust: String,

    services: [ItemSchema],
    whyChoose: [ItemSchema],

    ctaTitle: String,
    ctaText: String,
  },
  { timestamps: true }
);

export default mongoose.model("Landing", LandingSchema);
