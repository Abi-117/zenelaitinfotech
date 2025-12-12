import About from "../models/about.model.js";

// GET ABOUT PAGE CONTENT
export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE ABOUT CONTENT
export const updateAbout = async (req, res) => {
  try {
    let data = req.body;

    if (req.file) {
      data.heroImage = "/uploads/" + req.file.filename;
    }

    const updated = await About.findOneAndUpdate({}, data, { new: true, upsert: true });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
