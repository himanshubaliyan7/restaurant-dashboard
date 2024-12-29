import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Offers() {
  const [offers, setOffers] = useState([
    { code: "WELCOME50", desc: "50% off on first order", active: true },
    { code: "FREEDRINK", desc: "1 free beverage", active: false },
  ]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");

  const addOffer = () => {
    if (!code.trim() || !desc.trim()) return;
    setOffers([...offers, { code, desc, active: true }]);
    setCode("");
    setDesc("");
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-700">Offers</h1>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Current Offers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border">
            <thead className="bg-gray-50 border-b">
              <tr className="text-gray-500">
                <th className="py-2 px-2">Code</th>
                <th className="py-2 px-2">Description</th>
                <th className="py-2 px-2">Active</th>
                <th className="py-2 px-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, i) => (
                <React.Fragment key={i}>
                  <tr className="border-b last:border-0 hover:bg-gray-100 transition">
                    <td className="py-2 px-2">{offer.code}</td>
                    <td className="py-2 px-2">{offer.desc}</td>
                    <td className="py-2 px-2">
                      {offer.active ? (
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full animate-pulse">
                          Active
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="py-2 px-2">
                      <button
                        onClick={() =>
                          setSelectedOffer(selectedOffer === i ? null : i)
                        }
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>

                  {/* Expandable row for more info */}
                  <Transition
                    show={selectedOffer === i}
                    enter="transition-all duration-300"
                    enterFrom="max-h-0 opacity-0"
                    enterTo="max-h-20 opacity-100"
                    leave="transition-all duration-300"
                    leaveFrom="max-h-20 opacity-100"
                    leaveTo="max-h-0 opacity-0"
                  >
                    <tr className="border-b last:border-0">
                      <td
                        colSpan={4}
                        className="py-2 px-2 bg-gray-50 text-sm text-gray-600"
                      >
                        <p>
                          Here you can show extra details about the offer: usage
                          limits, valid dates, or terms &amp; conditions.
                        </p>
                      </td>
                    </tr>
                  </Transition>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Add New Offer
        </h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Offer Code
            </label>
            <input
              type="text"
              className="border rounded w-full px-2 py-1 focus:border-red-500 transition"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="md:flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Offer Description
            </label>
            <input
              type="text"
              className="border rounded w-full px-2 py-1 focus:border-red-500 transition"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={addOffer}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
