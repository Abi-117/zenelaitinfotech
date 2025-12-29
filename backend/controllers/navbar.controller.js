import Navbar from "../models/navbar.model.js";

export const getNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findOne();
    res.status(200).json(navbar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateNavbar = async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body); // DEBUG

    const navbar = await Navbar.findOneAndUpdate(
      {},                 // update first doc
      req.body,           // new data
      {
        new: true,
        upsert: true,     // create if not exists
      }
    );

    res.status(200).json({
      message: "Navbar Updated Successfully",
      data: navbar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
