import Erp from "../models/Erp.js";

/* GET ERP PAGE DATA */
export const getErpPage = async (req, res) => {
  try {
    let erp = await Erp.findOne();

    // first time empty irundha default create pannum
    if (!erp) {
      erp = await Erp.create({
        heroTitle: "ERP Systems",
        heroText: "Manage all business operations in one place",
        whatsapp: "https://wa.me/919884264816",
        featuresTitle: "Key Features",
        features: [],
        featureImage: "",
        perfectFor: [],
        whyTitle: "Why Choose Our ERP",
        why: [],
      });
    }

    res.status(200).json(erp);
  } catch (error) {
    res.status(500).json({ message: "ERP fetch failed", error });
  }
};

/* UPDATE ERP PAGE DATA */
export const updateErpPage = async (req, res) => {
  try {
    const updated = await Erp.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "ERP update failed", error });
  }
};
