import express from "express";
import { adminLogin, updateAdmin } from "../controllers/admin.controller.js";
import multer from "multer";

const router = express.Router();

// ---------- MULTER STORAGE ----------
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ---------- ROUTES ----------
router.post("/login", adminLogin);

// ⭐ NEW ROUTE – Update Admin with Image Upload
router.put("/update/:id", upload.single("image"), updateAdmin);

export default router;
