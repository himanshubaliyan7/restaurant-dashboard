// ------------------------
// src/pages/DeliveryMenu.jsx
// Combined Category & Item management plus image upload
// ------------------------
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DeliveryMenu() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  // Category form
  const [newCategory, setNewCategory] = useState("");

  // Item form
  const [itemName, setItemName] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/categories", {
        categoryName: newCategory,
      });
      setNewCategory("");
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAddItem = async () => {
    if (!itemName.trim() || !basePrice || !selectedCategoryId) return;

    let uploadedImageUrl = "";
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      const uploadRes = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      uploadedImageUrl = uploadRes.data.imageUrl;
    }

    try {
      await axios.post("http://localhost:5000/api/items", {
        itemName,
        categoryId: selectedCategoryId,
        basePrice,
        description,
        imageUrl: uploadedImageUrl,
      });
      setItemName("");
      setBasePrice("");
      setDescription("");
      setSelectedCategoryId("");
      setSelectedFile(null);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">Delivery Menu Categories</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Category Name"
            className="border px-2 py-1 flex-1"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat._id}
              className="p-2 border rounded bg-gray-50 text-gray-700"
            >
              {cat.categoryName}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Item Name"
            className="border px-2 py-1"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Base Price"
            className="border px-2 py-1"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="border px-2 py-1"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <select
            className="border px-2 py-1"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.categoryName}
              </option>
            ))}
          </select>
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={handleAddItem}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 mt-2 w-fit"
          >
            Save Item
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">Delivery Menu Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item._id} className="border rounded p-3 bg-gray-50">
              <div className="font-semibold text-lg">{item.itemName}</div>
              <div className="text-sm text-gray-600">
                Price: ₹{item.basePrice}
              </div>
              <div className="text-sm text-gray-600">
                Category: {item.categoryId?.categoryName || "None"}
              </div>
              {item.imageUrl && (
                <img
                  src={`http://localhost:5000${item.imageUrl}`}
                  alt="Dish"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
              {item.description && (
                <div className="text-gray-700 mt-2">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
