import Erp from "../models/Erp.model.js";

export const getErp = async (req, res) => {
  try {
    const erp = await Erp.findOne();
    res.json(erp);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateErp = async (req, res) => {
  try {
    const erp = await Erp.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(erp);
  } catch (err) {
    res.status(500).json(err);
  }
};
