import express from "express";
import { login, register } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

// 🔓 PUBLIC ROUTES
router.post("/register", upload.single("image"), register);
router.post("/login", login);

// 🔐 PROTECTED ROUTES
router.get("/me", isAuthenticated, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export default router;