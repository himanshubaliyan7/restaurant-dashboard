// ------------------------
// src/pages/DashboardHome.jsx
// ------------------------
import React from "react";

export default function DashboardHome() {
  return (
    <div className="bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">
        This is the main overview page. You can navigate using the sidebar to
        manage your Delivery Menu, Dine-In Menu, Taxes & Charges, Offers, and
        more.
      </p>
    </div>
  );
}
