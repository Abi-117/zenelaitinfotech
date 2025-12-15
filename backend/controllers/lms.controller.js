import LmsPage from "../models/lms.model.js";

export const getLms = async (req, res) => {
  try {
    const lms = await LmsPage.findOne();
    res.json(lms);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch LMS" });
  }
};

export const updateLms = async (req, res) => {
  try {
    const updated = await LmsPage.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
