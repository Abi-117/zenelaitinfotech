import express from "express";
import { getErp, updateErp } from "../controllers/erp.controller.js";

const router = express.Router();

router.get("/", getErp);
router.put("/", updateErp);

export default router;
