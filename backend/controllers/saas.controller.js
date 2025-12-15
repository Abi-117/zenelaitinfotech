import Saas from "../models/Saas.model.js";

export const getSaas = async (req, res) => {
  try {
    const saas = await Saas.findOne();
    res.json(saas);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateSaas = async (req, res) => {
  try {
    const saas = await Saas.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(saas);
  } catch (err) {
    res.status(500).json(err);
  }
};
