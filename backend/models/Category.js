// backend/models/Category.js
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // if you want hierarchical categories
    default: null,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
