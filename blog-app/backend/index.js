import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import fs from "fs";

import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

dotenv.config();

const app = express();

// ✅ ENV CHECK
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.log("❌ Missing environment variables");
  process.exit(1);
}

// ✅ Ensure uploads folder exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// ✅ Middlewares
app.use(cors()); // 🔥 simple and safe for now
app.use(express.json());
app.use(morgan("dev"));

// ✅ Static
app.use("/images", express.static("uploads"));

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

// ❌ Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ❌ Global Error Handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// 🚀 Start Server
const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    console.log("✅ DB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ DB Connection Failed:", err);
  });