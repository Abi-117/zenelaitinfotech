import express from "express";
import {
  getContactPage,
  updateContactPage,
} from "../controllers/contactPageController.js";

const router = express.Router();

router.get("/", getContactPage);
router.put("/", updateContactPage);

export default router;
