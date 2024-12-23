// backend/models/Item.js
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  description: String,
  imageUrl: String,
  foodType: {
    type: String, // 'Veg', 'Non Veg', 'Egg'
    default: "Veg",
  },
  serviceType: {
    type: String, // 'Delivery', 'Takeaway', or both
    default: "Delivery,Takeaway",
  },
});

module.exports = mongoose.model("Item", ItemSchema);
