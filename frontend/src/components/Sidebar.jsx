// ------------------------
// src/components/Sidebar.jsx
// ------------------------
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineShoppingBag,
  HiOutlineCurrencyDollar,
  HiOutlineGift,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { MdOutlineDining } from "react-icons/md";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // If you have auth logic, place it here
    navigate("/");
  };

  return (
    <div
      className={`${
        expanded ? "w-64" : "w-20"
      } flex flex-col bg-white border-r border-gray-200 transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 bg-blue-600">
        <div className="flex items-center">
          <span className="text-white font-bold text-xl">
            {expanded ? "Restaurant" : "R"}
          </span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white focus:outline-none"
        >
          {expanded ? "<" : ">"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-4 space-y-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100 font-semibold" : "font-medium"
                }`
              }
            >
              <HiOutlineHome size={20} />
              {expanded && <span>Dashboard</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/delivery-menu"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100 font-semibold" : "font-medium"
                }`
              }
            >
              <HiOutlineTruck size={20} />
              {expanded && <span>Delivery Menu</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dine-in-menu"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100 font-semibold" : "font-medium"
                }`
              }
            >
              <MdOutlineDining size={20} />
              {expanded && <span>Dine-In Menu</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/taxes-charges"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100 font-semibold" : "font-medium"
                }`
              }
            >
              <HiOutlineCurrencyDollar size={20} />
              {expanded && <span>Taxes & Charges</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100 font-semibold" : "font-medium"
                }`
              }
            >
              <HiOutlineGift size={20} />
              {expanded && <span>Offers</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100 font-semibold" : "font-medium"
                }`
              }
            >
              <HiOutlineCog size={20} />
              {expanded && <span>Settings</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center w-full gap-2 px-3 py-2 hover:bg-gray-100 rounded-md"
        >
          <HiOutlineLogout size={20} />
          {expanded && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
