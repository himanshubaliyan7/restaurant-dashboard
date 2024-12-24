// frontend/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CategoryList from "./components/CategoryList";
import ItemList from "./components/ItemList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="categories" element={<CategoryList />} />
          <Route path="items" element={<ItemList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
