// src/pages/Offers.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Suppose your data is default-exported as 'dummy'
import dummy from '../data/dummy';
import { initialOffers } from '../data/offersData';
import { filterCategoriesByOffers } from '../utils/filterMenu';

// Sub-components
import CreateOfferForm from '../components/Offers/CreateOfferForm';
import OffersList from '../components/Offers/OffersList';
import CategoryDisplay from '../components/Offers/CategoryDisplay';

function Offers() {
  const { deliveryCategories, dineInCategories } = dummy;
  const [offers, setOffers] = useState(initialOffers);

  // Flatten items if needed for the multi-select
  const allDeliveryItems = deliveryCategories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.items)
  );
  const allDineInItems = dineInCategories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.items)
  );
  const allItems = [...allDeliveryItems, ...allDineInItems];

  // Collect unique categories and subcategories
  const uniqueCategories = [
    ...new Set([...deliveryCategories, ...dineInCategories].map((c) => c.name)),
  ];
  const uniqueSubCategories = [
    ...new Set(
      [...deliveryCategories, ...dineInCategories].flatMap((cat) =>
        cat.subcategories.map((sub) => sub.name)
      )
    ),
  ];

  // Handlers
  const handleAddOffer = (offerObj) => {
    setOffers((prev) => [...prev, offerObj]);
  };
  const handleRemoveOffer = (offerId) => {
    setOffers((prev) => prev.filter((o) => o.id !== offerId));
  };

  // Filtered data (only items with offers)
  const impactedDelivery = filterCategoriesByOffers(deliveryCategories, offers);
  const impactedDineIn = filterCategoriesByOffers(dineInCategories, offers);

  return (
    <motion.div
      className="min-h-screen bg-gray-100" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Container with some padding and max-width */}
      <div className="p-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Manage Offers
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <CreateOfferForm
              onSave={handleAddOffer}
              categories={uniqueCategories}
              subCategories={uniqueSubCategories}
              items={allItems}
            />
          </div>

          <div className="flex-1">
            <OffersList
              offers={offers}
              onRemoveOffer={handleRemoveOffer}
            />
          </div>
        </div>

        <CategoryDisplay
          data={impactedDelivery}
          offers={offers}
          title="Items with Offers (Delivery)"
        />
        <CategoryDisplay
          data={impactedDineIn}
          offers={offers}
          title="Items with Offers (Dine-In)"
        />
      </div>
    </motion.div>
  );
}

export default Offers;
