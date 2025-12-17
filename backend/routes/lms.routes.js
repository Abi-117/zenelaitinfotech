import express from "express";
import { getLms, saveLms } from "../controllers/lms.controller.js";

const router = express.Router();

router.get("/", getLms);
router.post("/", saveLms);

export default router;
