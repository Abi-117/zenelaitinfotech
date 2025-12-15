import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  heroTitle: String,
  heroText: String,
  address: String,
  phone: String,
  email: String,
  businessHours: String,
  mapUrl: String,
  image: String,
});

export default mongoose.model("Contact", ContactSchema);
