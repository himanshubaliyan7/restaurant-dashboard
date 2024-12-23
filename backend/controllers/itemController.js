// backend/controllers/itemController.js
const Item = require("../models/Item");
const Category = require("../models/Category");

exports.createItem = async (req, res) => {
  try {
    const {
      itemName,
      categoryId,
      basePrice,
      description,
      imageUrl,
      foodType,
      serviceType,
    } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ error: "Invalid categoryId" });
    }

    const newItem = new Item({
      itemName,
      categoryId,
      basePrice,
      description,
      imageUrl,
      foodType,
      serviceType,
    });
    await newItem.save();
    return res.status(201).json(newItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    // Populate to get category details
    const items = await Item.find().populate("categoryId");
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
