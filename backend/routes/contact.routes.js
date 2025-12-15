import express from "express";
import upload from "../middleware/upload.js";
import { getContact, updateContact } from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", getContact);
router.put("/", upload.single("image"), updateContact);

export default router;
