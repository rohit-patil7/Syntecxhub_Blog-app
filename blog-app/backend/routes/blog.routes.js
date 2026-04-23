import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { upload } from "../middlewares/multer.js";

import {
  allBlogs,
  createBlog,
  deleteBlog,
  userBlogs,
  singleBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

// 🔥 PUBLIC ROUTES
router.get("/", allBlogs);              // GET all blogs
router.get("/:id", singleBlog);        // GET single blog

// 🔐 PROTECTED ROUTES
router.post("/", isAuthenticated, upload.single("image"), createBlog); // CREATE
router.delete("/:id", isAuthenticated, deleteBlog);                     // DELETE
router.get("/user/me", isAuthenticated, userBlogs);                     // USER BLOGS

export default router;