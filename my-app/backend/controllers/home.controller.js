import Home from "../models/Home.model";

/* GET HOME DATA (Frontend) */
export const getHome = async (req, res) => {
  try {
    const data = await Home.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* CREATE / UPDATE HOME (Admin) */
export const saveHome = async (req, res) => {
  try {
    const existing = await Home.findOne();

    if (existing) {
      const updated = await Home.findByIdAndUpdate(
        existing._id,
        req.body,
        { new: true }
      );
      return res.json(updated);
    }

    const home = new Home(req.body);
    await home.save();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE SERVICE */
export const deleteService = async (req, res) => {
  try {
    const home = await Home.findOne();
    home.services = home.services.filter(
      (s) => s._id.toString() !== req.params.id
    );
    await home.save();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE WHY ITEM */
export const deleteWhy = async (req, res) => {
  try {
    const home = await Home.findOne();
    home.whyChoose = home.whyChoose.filter(
      (w) => w._id.toString() !== req.params.id
    );
    await home.save();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
