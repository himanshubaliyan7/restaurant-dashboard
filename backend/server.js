require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const connectDB = require("./config/db");
const apiRoutes = require("./routes");
const outletRoutes = require("./routes/outletRoutes");

const app = express();

// Basic middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// -- MULTER CONFIG --
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Make sure to create "uploads" folder at the root of "backend"
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Example filename: "1692888888888-originalname.png"
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

app.use("/api/outlet-info", outletRoutes);
// Serve static files from "uploads" so they can be accessed by URL
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// -- IMAGE UPLOAD ROUTE --
app.post("/api/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    // Return the relative path that the frontend will use, e.g. "/uploads/filename.png"
    return res.json({ imageUrl: `/uploads/${req.file.filename}` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// -- OTHER API ROUTES (categories, items, etc.) --
app.use("/api", apiRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
