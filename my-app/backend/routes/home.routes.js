import express from "express";
import {
  getHome,
  saveHome,
  deleteService,
  deleteWhy,
} from "../controllers/home.controller.js";

const router = express.Router();

router.get("/", getHome);
router.post("/", saveHome);
router.delete("/service/:id", deleteService);
router.delete("/why/:id", deleteWhy);

export default router;
