import express from "express";
import { getLms, updateLms } from "../controllers/lms.controller.js";

const router = express.Router();

router.get("/", getLms);
router.put("/", updateLms);

export default router;
