import About from "../models/About.model.js";
import fs from "fs";
import path from "path";

/* GET ABOUT */
export const getAbout = async (req, res) => {
  const about = await About.findOne();
  res.json(about);
};

/* UPDATE ABOUT */
export const updateAbout = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const about = await About.findOne();

    // hero image update
    if (req.file) {
      if (about?.heroImage) {
        const oldImg = path.join("uploads", about.heroImage);
        fs.existsSync(oldImg) && fs.unlinkSync(oldImg);
      }
      data.heroImage = req.file.filename;
    }

    const updated = await About.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
