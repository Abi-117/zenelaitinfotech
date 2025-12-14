import CRM from "../models/Crm.model.js";

export const getCrm = async (req, res) => {
  try {
    const crm = await CRM.findOne();
    res.json(crm);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateCrm = async (req, res) => {
  try {
    const crm = await CRM.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(crm);
  } catch (err) {
    res.status(500).json(err);
  }
};
