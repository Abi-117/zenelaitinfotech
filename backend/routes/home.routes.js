import express from "express";
import multer from "multer";

import {
  getHome,
  saveHome,
  deleteService,
  deleteWhy,
} from "../controllers/home.controller.js";

const router = express.Router();

/* MULTER CONFIG */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ROUTES */
router.get("/", getHome);
router.put("/", upload.single("image"), saveHome);
router.delete("/service/:id", deleteService);
router.delete("/why/:id", deleteWhy);

export default router;
