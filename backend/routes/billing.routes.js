import express from "express";
import {
  getBilling,
  saveBilling,
  deleteBilling
} from "../controllers/billing.controller.js";

import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", getBilling);
router.post("/", upload.single("image"), saveBilling); // create or update
router.delete("/:id", deleteBilling); // delete by ID

export default router;
