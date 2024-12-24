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
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  foodType: {
    type: String,
    default: "Veg",
  },
  serviceType: {
    type: String,
    default: "Delivery,Takeaway",
  },
});

module.exports = mongoose.model("Item", ItemSchema);
