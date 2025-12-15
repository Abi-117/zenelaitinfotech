import Service from "../models/Service.model.js";

/* GET service page */
export const getService = async (req, res) => {
  try {
    const data = await Service.findOne();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* CREATE / UPDATE whole page */
export const saveService = async (req, res) => {
  try {
    const updated = await Service.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, upsert: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE a service item */
export const deleteServiceItem = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Service.findOneAndUpdate(
      {},
      { $pull: { services: { _id: id } } },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE technology */
export const deleteTechnology = async (req, res) => {
  try {
    const { tech } = req.params;

    const updated = await Service.findOneAndUpdate(
      {},
      { $pull: { technologies: tech } },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE process step */
export const deleteProcessStep = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Service.findOneAndUpdate(
      {},
      { $pull: { processSteps: { _id: id } } },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
