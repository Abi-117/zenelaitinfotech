import Landing from "../models/landing.model.js";

/* =========================
   GET LANDING DATA
========================= */
export const getLanding = async (req, res) => {
  try {
    const data = await Landing.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch landing data" });
  }
};

/* =========================
   CREATE / UPDATE LANDING
========================= */
export const saveLanding = async (req, res) => {
  try {
    const existing = await Landing.findOne();

    if (existing) {
      await Landing.updateOne({}, req.body);
    } else {
      await Landing.create(req.body);
    }

    res.status(200).json({
      success: true,
      message: "Landing page saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to save landing data" });
  }
};
