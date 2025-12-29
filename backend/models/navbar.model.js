import mongoose from "mongoose";

const NavbarSchema = new mongoose.Schema({
  home: String,
  about: String,
  products: String,
  service: String,
  overview: String,
  contact: String,
  button: String,
});

const Navbar = mongoose.model("Navbar", NavbarSchema);
export default Navbar;
