import express from "express";
const multer = require("multer");

import {
  getHome,
  saveHome,
  deleteService,
  deleteWhy,
} from "../controllers/home.controller.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.get("/", getHome);
router.put("/", upload.single("image"), saveHome);
router.delete("/service/:id", deleteService);
router.delete("/why/:id", deleteWhy);

export default router;
