import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,

  services: [
    {
      title: String,
      description: String,
      icon: String,
    },
  ],

  technologies: [String],

  processSteps: [
    {
      step: String,
      title: String,
      desc: String,
    },
  ],
});

export default mongoose.model("Service", ServiceSchema);
