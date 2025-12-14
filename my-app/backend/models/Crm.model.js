import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});

const crmSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      required: true,
    },

    benefits: {
      type: [String],
      default: [],
    },

    perfectFor: {
      type: [cardSchema],
      default: [],
    },

    why: {
      type: [cardSchema],
      default: [],
    }
  },
  { timestamps: true }
);

export default mongoose.model("CRM", crmSchema);
