import Lms from "../models/Lms.model.js";

/* ================= GET ================= */
export const getLms = async (req, res) => {
  try {
    const data = await Lms.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= SAVE / UPDATE ================= */
export const saveLms = async (req, res) => {
  try {
    const payload = req.body;

    const existing = await Lms.findOne();

    let result;
    if (existing) {
      result = await Lms.findByIdAndUpdate(existing._id, payload, {
        new: true,
      });
    } else {
      result = await Lms.create(payload);
    }

    res.json({
      success: true,
      message: "LMS saved successfully",
      data: result,
    });
  } catch (err) {
    console.error("LMS SAVE ERROR 👉", err);
    res.status(500).json({ message: err.message });
  }
};
