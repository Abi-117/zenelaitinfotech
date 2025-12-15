import Contact from "../models/Contact.js";
import fs from "fs";
import path from "path";

export const getContact = async (req, res) => {
  const data = await Contact.findOne();
  res.json(data);
};

export const updateContact = async (req, res) => {
  const parsed = JSON.parse(req.body.data);

  const existing = await Contact.findOne();

  // delete old image
  if (req.file && existing?.image) {
    const oldPath = path.join("uploads", existing.image);
    fs.existsSync(oldPath) && fs.unlinkSync(oldPath);
  }

  const updated = await Contact.findOneAndUpdate(
    {},
    {
      ...parsed,
      image: req.file ? req.file.filename : existing?.image,
    },
    { new: true, upsert: true }
  );

  res.json(updated);
};
