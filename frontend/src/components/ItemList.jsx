// frontend/src/components/ItemList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  // form fields
  const [itemName, setItemName] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addItem = async () => {
    try {
      await axios.post("http://localhost:5000/api/items", {
        itemName,
        categoryId,
        basePrice,
      });
      setItemName("");
      setBasePrice("");
      setCategoryId("");
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Items</h1>

      <ul className="mb-4">
        {items.map((item) => (
          <li key={item._id} className="py-1">
            {item.itemName} - ₹{item.basePrice} (Category:{" "}
            {item.categoryId?.categoryName || "None"})
          </li>
        ))}
      </ul>

      <div className="mb-2 flex gap-2">
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
        <select
          className="border px-2 py-1"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      <button className="bg-blue-500 text-white px-4 py-1" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}

export default ItemList;
