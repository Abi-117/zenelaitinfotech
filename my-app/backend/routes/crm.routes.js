import express from "express";
import { getCrm, updateCrm } from "../controllers/crm.controller.js";

const router = express.Router();

router.get("/", getCrm);
router.put("/", updateCrm);

export default router;
