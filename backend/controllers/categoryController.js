// backend/controllers/categoryController.js
const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { categoryName, parentId } = req.body;
    const newCategory = new Category({
      categoryName,
      parentId: parentId || null,
    });
    await newCategory.save();
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
