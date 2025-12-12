import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String, // ex: "FaBolt"
});

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

const whySchema = new mongoose.Schema({
  text: String,
  icon: String, // ex: "FaCheckCircle"
});

const homeSchema = new mongoose.Schema({
  hero: {
    line1: String,
    line2: String,
    line3: String,
    highlight: String,
    rightText: String,
    exploreText: String,
  },
  about: {
    title: String,
    text: String,
  },
  features: [featureSchema],
  services: [serviceSchema],
  whyChooseUs: [whySchema],
});

const Home = mongoose.model("Home", homeSchema);
export default Home;
