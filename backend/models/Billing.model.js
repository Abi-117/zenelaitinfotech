import mongoose from "mongoose";

const billingSchema = new mongoose.Schema(
  {
    productId: { type: String, unique: true },
    label: String,
    title: String,
    desc: String,
    benefits: [String],
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Billing", billingSchema);
