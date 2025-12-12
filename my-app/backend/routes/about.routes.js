import express from "express";
import multer from "multer";
import { getAbout, updateAbout } from "../controllers/about.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", getAbout);
router.put("/update", upload.single("heroImage"), updateAbout);

export default router;
