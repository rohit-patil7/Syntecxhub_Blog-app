import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    slug: {
      type: String,
      unique: true,
    },

    image: {
      type: String,
      default: "default.png",
    },

    category: {
      type: String,
      required: true,
      enum: ["Tech", "Lifestyle", "Education", "Other"],
    },

    description: {
      type: String,
      required: true,
      minlength: 20,
    },

    // ✅ Better author reference
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🔥 Extra features
    likes: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ✅ Index for fast search
blogSchema.index({ title: "text", description: "text" });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;