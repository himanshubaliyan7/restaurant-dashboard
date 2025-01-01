import React from "react";
import ItemCard from "./ItemCard";

function CategoryDisplay({ data, offers, title }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No items currently have offers here.</p>
      ) : (
        data.map((cat) => (
          <div key={cat.name} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">{cat.name}</h3>
            {cat.subcategories.map((sub) => (
              <div key={sub.name} className="ml-4 mt-2">
                <h4 className="text-md font-medium text-gray-600">
                  {sub.name}
                </h4>
                {/* Cards in a grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {sub.items.map((itm) => (
                    <ItemCard key={itm.id} item={itm} allOffers={offers} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryDisplay;
