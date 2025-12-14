import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

const whySchema = new mongoose.Schema({
  text: String,
});

const homeSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroSubtitle: String,

    aboutTitle: String,
    aboutText: String,

    services: [serviceSchema],

    whyChoose: [whySchema],
  },
  { timestamps: true }
);

export default mongoose.model("Home", homeSchema);
