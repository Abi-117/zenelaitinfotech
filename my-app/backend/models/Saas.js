import mongoose from "mongoose";

const SaasSchema = new mongoose.Schema({
  heroTitle: String,
  heroSubtitle: String,

  features: [String],

  perfectFor: [
    {
      title: String,
      text: String,
    },
  ],

  whyChoose: [
    {
      title: String,
      text: String,
    },
  ],

  testimonials: [
    {
      text: String,
      author: String,
    },
  ],
});

export default mongoose.model("Saas", SaasSchema);
