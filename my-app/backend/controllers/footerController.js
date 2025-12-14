import Footer from "../models/Footer.js";

export const getFooter = async (req, res) => {
  const data = await Footer.findOne();
  res.json(data);
};

export const updateFooter = async (req, res) => {
  const updated = await Footer.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(updated);
};
