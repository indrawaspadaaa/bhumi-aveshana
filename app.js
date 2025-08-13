/** @format */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// === Load environment variables ===
dotenv.config();

// 🔍 Debug: pastikan .env terbaca
console.log("📦 Loaded DB_HOST:", process.env.DB_HOST);

const app = express();
console.log("✅ STARTING APP.JS - ROUTES READY");


// === Middleware ===
app.use(cors());
app.use(express.json());

// === Static File Handling ===
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// === Route Imports ===
const authRoutes = require("./routes/authRoutes");             // 🔑 Login/Register User & Admin
const adminRoutes = require("./routes/adminRoutes");           // ⚙️ Admin-only features
const categoryRoutes = require("./routes/categoryRoutes");     // 📁 Place categories
const uploadRoutes = require("./routes/upload");               // ⬆️ Upload endpoints (e.g., image)
const userRoutes = require("./routes/userRoutes");             // 👤 User profile & actions
const reviewRoutes = require("./routes/reviewRoutes");         // ✍️ Place reviews
const contentRoutes = require("./routes/contentRoutes");       // 📄 Static & CMS content
const wishlistRoutes = require("./routes/wishlistRoutes");     // ❤️ Wishlist features

// === API Route Prefixes ===
app.use("/api/auth", authRoutes);                  // /api/auth/login, /register
app.use("/api/admin", adminRoutes);                // /api/admin/...
app.use("/api/categories", categoryRoutes);        // /api/categories
app.use("/api/upload", uploadRoutes);              // /api/upload/image
app.use("/api/users", userRoutes);                 // /api/users/:id
app.use("/api/reviews", reviewRoutes);             // /api/reviews/:placeId
app.use("/api/users/wishlist", wishlistRoutes);    // /api/users/wishlist
app.use("/api/admin/content", contentRoutes);      // /api/admin/content/:slug

// === Health Check Endpoint ===
app.get("/", (req, res) => {
  res.send("🚀 Bhumi Aveshana API is running!");
});

// === Start Express Server ===
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
