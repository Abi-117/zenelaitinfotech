import ContactPage from "../models/ContactPage.js";

export const getContactPage = async (req, res) => {
  const data = await ContactPage.findOne();
  res.json(data);
};

export const updateContactPage = async (req, res) => {
  const updated = await ContactPage.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });
  res.json(updated);
};
