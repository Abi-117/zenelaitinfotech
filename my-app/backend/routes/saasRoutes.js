import express from "express";
import { getSaas, updateSaas } from "../controllers/saasController.js";

const router = express.Router();

router.get("/", getSaas);
router.put("/", updateSaas);

export default router;
