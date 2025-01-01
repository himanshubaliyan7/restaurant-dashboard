// src/components/Offers/OffersList.jsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Props:
 *  - offers: array of offer objects (id, name, code, discount, scope, validUntil, active)
 *  - onRemoveOffer(offerId): callback to remove an offer
 */
function OffersList({ offers, onRemoveOffer }) {
  // Optional: For each offer, we can check if it's expired (if we have `validUntil`)
  const isExpired = (offer) => {
    if (!offer.validUntil) return false;
    const now = new Date();
    const expiry = new Date(offer.validUntil);
    return now > expiry;
  };

  // AnimatePresence + motion.li give us a nice remove animation
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Current Offers</h2>
      {offers.length === 0 ? (
        <p className="text-gray-500">No offers created yet.</p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {offers.map((offer) => {
              const expired = isExpired(offer);
              const scopeBg =
                offer.scope === "item"
                  ? "bg-blue-100 text-blue-800"
                  : offer.scope === "subcategory"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-green-100 text-green-800"; // for "category"

              return (
                <motion.li
                  key={offer.id}
                  className="relative overflow-hidden rounded shadow-sm bg-white
                             border border-gray-100 p-4 flex flex-col
                             md:flex-row md:items-center md:justify-between
                             hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  layout
                >
                  <div>
                    {/* Offer Title + Discount */}
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-base">
                        {offer.name}
                      </p>
                      {expired && (
                        <span className="text-xs text-red-500 font-medium">
                          (Expired)
                        </span>
                      )}
                    </div>

                    {/* Code, Scope, and Validity Row */}
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>
                        Code: <strong>{offer.code}</strong>
                      </p>
                      <p>
                        Discount: <strong>{offer.discount}</strong>
                      </p>

                      {/* Scope Badge */}
                      <div className="flex items-center gap-1">
                        <span
                          className={`px-2 py-0.5 text-xs font-semibold rounded ${scopeBg}`}
                        >
                          {offer.scope}
                        </span>
                        {/* Optional validity display */}
                        {offer.validUntil && (
                          <span className="text-xs text-gray-500">
                            Expires on {offer.validUntil}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="mt-3 md:mt-0 bg-red-500 text-white px-3 py-1.5
                               rounded hover:bg-red-600 transition-colors
                               text-sm"
                    onClick={() => onRemoveOffer(offer.id)}
                  >
                    Remove
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}

export default OffersList;
