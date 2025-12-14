import express from "express";
import { getBilling, updateBilling } from "../controllers/billing.controller.js";

const router = express.Router();

router.get("/", getBilling);
router.put("/", updateBilling);

export default router;
