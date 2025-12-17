import express from "express";
import upload from "../middleware/upload.js";
import {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", upload.single("image"), saveProduct);
router.put("/:id", upload.single("image"), updateProduct); // ⭐ IMPORTANT
router.delete("/:id", deleteProduct);

export default router;
