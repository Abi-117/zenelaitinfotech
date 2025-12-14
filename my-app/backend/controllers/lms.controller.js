import Lms from "../models/lms.model.js";

export const getLms = async (req, res) => {
  const data = await Lms.findOne();
  res.json(data);
};

export const updateLms = async (req, res) => {
  const updated = await Lms.findOneAndUpdate({}, req.body, {
    upsert: true,
    new: true
  });
  res.json(updated);
};
