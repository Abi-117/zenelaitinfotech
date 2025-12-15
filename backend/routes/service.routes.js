import express from "express";
import {
  getService,
  saveService,
  deleteServiceItem,
  deleteTechnology,
  deleteProcessStep,
} from "../controllers/service.controller.js";

const router = express.Router();

router.get("/", getService);
router.put("/", saveService);

router.delete("/service/:id", deleteServiceItem);
router.delete("/technology/:tech", deleteTechnology);
router.delete("/process/:id", deleteProcessStep);

export default router;
