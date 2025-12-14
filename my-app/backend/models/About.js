import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
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
});

export default mongoose.model("About", AboutSchema);
