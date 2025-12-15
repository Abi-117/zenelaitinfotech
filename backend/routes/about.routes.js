import express from "express";
import upload from "../middleware/upload.js";
import {
  getAbout,
  updateAbout,
} from "../controllers/about.controller.js";

const router = express.Router();

router.get("/", getAbout);
router.put("/", upload.single("heroImage"), updateAbout);

export default router;
