import express from "express";
import { getService, updateService } from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", getService);
router.put("/", updateService);

export default router;
