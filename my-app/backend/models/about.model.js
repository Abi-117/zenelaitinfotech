import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  heroTitle: String,
  heroParagraph1: String,
  heroParagraph2: String,
  story1: String,
  story2: String,
  story3: String,
  mission: String,
  vision: String,
  value1: String,
  value2: String,
  value3: String,
  value4: String,
  heroImage: String,  // image file URL
}, { timestamps: true });

export default mongoose.model("About", AboutSchema);
