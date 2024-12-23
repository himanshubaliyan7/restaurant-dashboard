// backend/config/db.js
require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  const uri =
    process.env.MONGO_URI || "mongodb://localhost:27017/restaurant_db";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected at: ${uri}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

module.exports = connectDB;
