// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const apiRoutes = require("./routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiRoutes);

// Connect to DB and Start Server
const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
