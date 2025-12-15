import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroText1: String,
    heroText2: String,
    heroImage: String,

    storyTitle: String,
    storyParas: [String],

    missionText: String,
    visionText: String,

    values: [
      {
        title: String,
        text: String,
        icon: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);
