import ContactMessage from "../models/ContactMessage.js";

export const saveMessage = async (req, res) => {
  try {
    const msg = await ContactMessage.create(req.body);
    res.json({ success: true, message: "Message saved", data: msg });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

export const getMessages = async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json(messages);
};
