import Saas from "../models/Saas.js";

export const getSaas = async (req, res) => {
  const data = await Saas.findOne();
  res.json(data);
};

export const updateSaas = async (req, res) => {
  const updated = await Saas.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(updated);
};
