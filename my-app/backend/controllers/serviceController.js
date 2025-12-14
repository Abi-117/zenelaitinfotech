import Service from "../models/Service.js";

export const getService = async (req, res) => {
  const data = await Service.findOne();
  res.json(data);
};

export const updateService = async (req, res) => {
  const updated = await Service.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(updated);
};
