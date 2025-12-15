import express from "express";
import { getNavbar, updateNavbar } from "../controllers/navbar.controller.js";

const router = express.Router();

router.get("/", getNavbar);
router.put("/update", updateNavbar);

export default router;
