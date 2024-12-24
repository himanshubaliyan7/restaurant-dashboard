// ------------------------
// src/components/TopNav.jsx
// ------------------------
import React from "react";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
      <div className="text-xl font-bold">Restaurant Dashboard</div>
      <div className="flex items-center gap-4">
        <div className="text-sm">Hello, Admin</div>
        <img
          src="https://placehold.co/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>
    </div>
  );
}
