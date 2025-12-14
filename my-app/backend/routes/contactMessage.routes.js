import express from "express";
import {
  saveMessage,
  getMessages,
} from "../controllers/contactMessageController.js";

const router = express.Router();

router.post("/", saveMessage);   // form submit
router.get("/", getMessages);    // admin inbox

export default router;
