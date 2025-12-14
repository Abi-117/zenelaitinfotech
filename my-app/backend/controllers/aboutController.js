import About from "../models/About.js";

export const getAbout = async (req, res) => {
  const data = await About.findOne();
  res.json(data);
};

export const updateAbout = async (req, res) => {
  const updated = await About.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(updated);
};
