// src/components/Offers/ItemCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { getApplicableOffers } from "../../utils/offerUtils";

// function ItemCard({ item, allOffers }) {
//   // Determine which offers match this item
//   const matchedOffers = getApplicableOffers(item, allOffers);

//   // Use the first image if available; fallback to placeholder
//   const imageUrl = item.images?.[0] || 'https://via.placeholder.com/150x100';

//   // Motion variants for subtle entrance + hover
//   const cardVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//     hover: { scale: 1.02 },
//   };

//   return (
//     <motion.div
//       className="bg-white rounded shadow-sm mb-2 cursor-pointer 
//                  transition-transform hover:shadow-md overflow-hidden
//                  p-2"
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       viewport={{ once: true }}
//       transition={{ duration: 0.2 }}
//     >
//       {/* Image Section (reduced size) */}
//       <div className="h-24 w-full overflow-hidden mb-2">
//         <img
//           src={imageUrl}
//           alt={item.name}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Card Content: Smaller Typography */}
//       <div>
//         <h4 className="text-base font-semibold text-gray-800 leading-tight">
//           {item.name}
//         </h4>
//         <p className="text-xs text-gray-500 mb-1">
//           {item.category} &gt; {item.subCategory}
//         </p>

//         {/* Pricing & Offers (smaller text) */}
//         <p className="text-sm text-gray-600 font-medium">
//           Price: ${item.pricing?.toFixed?.(2) ?? item.pricing}
//         </p>

//         {/* Offers as mini-badges or fallback text */}
//         {matchedOffers.length > 0 ? (
//           <div className="flex flex-wrap gap-1 mt-1">
//             {matchedOffers.map((offer) => (
//               <span
//                 key={offer.id}
//                 className="inline-block bg-green-50 text-green-700 px-1 py-0.5
//                            text-xs font-semibold rounded border border-green-100
//                            leading-tight"
//               >
//                 {offer.discount} OFF (Code: {offer.code})
//               </span>
//             ))}
//           </div>
//         ) : (
//           <span className="text-xs text-gray-400">No current offers</span>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default ItemCard;



function ItemCard({ item, allOffers }) {
  // Which offers match this item (item scope, subcategory scope, category scope)
  const matchedOffers = getApplicableOffers(item, allOffers);

  // Optional: pick an image if item.images exist
  const imageUrl = item.images?.[0] || 'https://via.placeholder.com/300x200';

  // Simple variant for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03 },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4 cursor-pointer
                 transition-transform hover:shadow-lg"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {/* Item Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 text-lg">{item.name}</h4>
        <p className="text-sm text-gray-500">
          {item.category} &gt; {item.subCategory}
        </p>

        {/* Pricing & Offers */}
        <div className="mt-2">
          <p className="text-gray-600 font-medium">
            Price: ${item.pricing?.toFixed?.(2) ?? item.pricing}
          </p>

          {/* Show matched offers as badges */}
          {matchedOffers.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-1">
              {matchedOffers.map((offer) => (
                <span
                  key={offer.id}
                  className="inline-block bg-green-50 text-green-700 px-2 py-1
                             text-xs font-semibold rounded-full shadow-sm
                             border border-green-100"
                >
                  {offer.discount} OFF (Code: {offer.code})
                </span>
              ))}
            </div>
          ) : (
            <span className="text-xs text-gray-400">No current offers</span>
          )}
        </div>

        {/* Optional description, truncated */}
        {item.description && (
          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default ItemCard;