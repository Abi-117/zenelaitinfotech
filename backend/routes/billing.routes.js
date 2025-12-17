import express from "express";
import { getBilling, saveBilling } from "../controllers/billing.controller.js";

const router = express.Router();

router.get("/", getBilling);
router.put("/", saveBilling); // 🔥 THIS LINE MUST EXIST

export default router;
