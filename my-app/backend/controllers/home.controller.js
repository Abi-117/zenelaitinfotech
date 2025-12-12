import Home from "../models/home.model.js";

export const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateHome = async (req, res) => {
  try {
    let home = await Home.findOne();
    if (!home) {
      home = new Home(req.body);
      await home.save();
      return res.json({ message: "Home content created" });
    }

    await Home.updateOne({}, req.body);
    res.json({ message: "Home content updated" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
