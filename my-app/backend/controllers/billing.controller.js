import Billing from "../models/Billing.model.js";

export const getBilling = async (req, res) => {
  try {
    const billing = await Billing.findOne();
    res.json(billing);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateBilling = async (req, res) => {
  try {
    const billing = await Billing.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(billing);
  } catch (err) {
    res.status(500).json(err);
  }
};
