import express from "express";
import {
  getLanding,
  saveLanding,
} from "../controllers/landing.controller.js";

const router = express.Router();

/* =========================
   LANDING ROUTES
========================= */
router.get("/", getLanding);
router.post("/", saveLanding);

export default router;
