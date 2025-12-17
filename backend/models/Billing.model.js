import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    desc: { type: String, default: "" },
  },
  { _id: false }
);

const billingSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    benefits: { type: [String], default: [] },
    perfectFor: { type: [cardSchema], default: [] },
    why: { type: [cardSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Billing", billingSchema);
