import Navbar from "../models/navbar.model.js";

export const getNavbar = async (req, res) => {
  try {
    const data = await Navbar.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateNavbar = async (req, res) => {
  try {
    let navbar = await Navbar.findOne();

    // if no navbar doc create one
    if (!navbar) {
      navbar = new Navbar(req.body);
      await navbar.save();
      return res.json({ message: "Navbar Created!" });
    }

    await Navbar.updateOne({}, req.body);
    res.json({ message: "Navbar Updated!" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
