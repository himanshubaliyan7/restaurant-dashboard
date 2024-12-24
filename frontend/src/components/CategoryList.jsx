// frontend/src/components/CategoryList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addCategory = async () => {
    try {
      await axios.post("http://localhost:5000/api/categories", {
        categoryName,
      });
      setCategoryName("");
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Categories</h1>

      <ul className="mb-4">
        {categories.map((cat) => (
          <li key={cat._id} className="py-1">
            {cat.categoryName}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter new category"
          className="border px-2 py-1"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1"
          onClick={addCategory}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CategoryList;
