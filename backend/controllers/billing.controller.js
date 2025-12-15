import Billing from "../models/Billing.model.js";
import fs from "fs";
import path from "path";

/* GET all billing entries */
export const getBilling = async (req, res) => {
  try {
    const billing = await Billing.find();
    res.json(billing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* CREATE / UPDATE */
export const saveBilling = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);

    // Find existing entry by productId
    const existing = await Billing.findOne({ productId: data.productId });

    // Image upload
    if (req.file) {
      if (existing?.image) {
        const oldImg = path.join("uploads", existing.image);
        fs.existsSync(oldImg) && fs.unlinkSync(oldImg);
      }
      data.image = req.file.filename;
    }

    const billing = await Billing.findOneAndUpdate(
      { productId: data.productId },
      { $set: data },
      { upsert: true, new: true }
    );

    res.json(billing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE */
export const deleteBilling = async (req, res) => {
  try {
    const billing = await Billing.findByIdAndDelete(req.params.id);

    if (!billing) return res.status(404).json({ message: "Billing entry not found" });

    // Delete image if exists
    if (billing.image) {
      const imgPath = path.join("uploads", billing.image);
      fs.existsSync(imgPath) && fs.unlinkSync(imgPath);
    }

    res.json({ message: "Billing entry deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
