import Home from "../models/Home.model.js";

/* GET HOME */
export const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* SAVE / UPDATE HOME */
export const saveHome = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);

    if (req.file && req.body.serviceIndex !== undefined) {
      data.services[req.body.serviceIndex].image = req.file.filename;
    }

    const updated = await Home.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE SERVICE */
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Home.findOneAndUpdate(
      {},
      { $pull: { services: { _id: id } } },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE WHY CHOOSE */
export const deleteWhy = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Home.findOneAndUpdate(
      {},
      { $pull: { whyChoose: { _id: id } } },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
