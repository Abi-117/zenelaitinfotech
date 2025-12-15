import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroSubtitle: String,

    aboutTitle: String,
    aboutText: String,

    services: [
      {
        title: String,
        description: String,
        image: String, // image filename
        link: String,
      },
    ],

    whyChoose: [
      {
        text: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Home", homeSchema);
