import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema({
  logo: String,
  description: String,

  products: [
    {
      label: String,
      link: String,
    },
  ],

  company: [
    {
      label: String,
      link: String,
    },
  ],

  address: String,
  phone: String,
  email: String,

  copyrightText: String,
  developerLink: String,
  developerLogo: String,
});

export default mongoose.model("Footer", FooterSchema);
