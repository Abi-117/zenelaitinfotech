import Billing from "../models/Billing.model.js";

/* GET */
export const getBilling = async (req, res) => {
  try {
    const billing = await Billing.findOne();
    if (!billing) {
      return res.json({
        title: "",
        subtitle: "",
        benefits: [],
        perfectFor: [],
        why: [],
      });
    }
    res.json(billing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* SAVE (Admin → Backend) */
export const saveBilling = async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body); // 👈 VERY IMPORTANT

    const data = req.body;

    const billing = await Billing.findOneAndUpdate(
      {},
      { $set: data },
      { upsert: true, new: true }
    );

    res.json(billing);
  } catch (err) {
    console.error("SAVE ERROR 👉", err);
    res.status(500).json({ message: err.message });
  }
};
