import mongoose from "mongoose";

const serviceItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
});

const processStepSchema = new mongoose.Schema({
  step: String,
  title: String,
  desc: String,
});

const serviceSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroText: String,

    services: [serviceItemSchema],
    technologies: [String],
    processSteps: [processStepSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
