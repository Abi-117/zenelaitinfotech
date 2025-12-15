import CRM from "../models/crm.model.js";

export const getCrm = async (req, res) => {
  try {
    const crm = await CRM.findOne();
    res.json(crm);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch CRM" });
  }
};

export const updateCrm = async (req, res) => {
  try {
    const updated = await CRM.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
