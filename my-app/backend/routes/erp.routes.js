import express from "express";
import { getErpPage, updateErpPage } from "../controllers/erp.controller.js";

const router = express.Router();

router.get("/", getErpPage);
router.put("/", updateErpPage);

export default router;
