// backend/routes/outletRoutes.js
const express = require("express");
const router = express.Router();

// This could be real data from a database. For now, we hardcode or fetch from DB:
// e.g., const Outlet = require('../models/Outlet'); // If you have a model

router.get("/", async (req, res) => {
  try {
    // If using a DB model, you'd do something like:
    // const outletInfo = await Outlet.findOne({ /* ... */ });

    // For demonstration, we return static data:
    const outletInfo = {
      name: "Empyrean Expedition",
      resId: "19096722",
      address: "Two Horizon, Golf Course Road, Gurgaon, Haryana.",
    };
    return res.json(outletInfo);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch outlet info." });
  }
});

module.exports = router;
