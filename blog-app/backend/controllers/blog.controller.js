import Blog from "../models/blog.model.js";
import fs from "fs";

// 🔹 GET ALL BLOGS
export const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "All blogs",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// 🔹 CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    // ✅ Safe image handling
    const image_filename = req.file ? req.file.filename : null;

    const blog = await Blog.create({
      title,
      category,
      description,
      image: image_filename,
      author: {
        id: req.user._id,
        name: req.user.name,
        image: req.user.image,
      },
    });

    return res.status(201).json({
      message: "Blog created successfully",
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// 🔹 DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // ✅ Check blog exists FIRST
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }

    // ✅ Authorization check
    if (blog.author.id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
        success: false,
      });
    }

    // ✅ Delete image safely
    if (blog.image) {
      fs.unlink(`uploads/${blog.image}`, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    await blog.deleteOne();

    return res.status(200).json({
      message: "Blog deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// 🔹 SINGLE BLOG
export const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Blog found",
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// 🔹 USER BLOGS
export const userBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({
      "author.id": req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};