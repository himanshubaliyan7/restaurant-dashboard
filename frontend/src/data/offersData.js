// src/data/offersData.js

// A small initial array of offers, each indicating its scope:
//   - scope: "category" => requires `categoryName`
//   - scope: "subcategory" => requires `subCategoryName`
//   - scope: "item" => requires `itemIds` array

export const initialOffers = [
  {
    id: "offer-cat-1",
    name: "20% Off All Starters",
    code: "START20",
    discount: "20%",
    scope: "category",
    categoryName: "Starters",
    subCategoryName: null,
    itemIds: [],
    active: true,
    validUntil: "2024-12-31",
  },
  {
    id: "offer-subcat-1",
    name: "15% Off Veg Starters",
    code: "VEGSTART15",
    discount: "15%",
    scope: "subcategory",
    categoryName: null,
    subCategoryName: "Veg Starters",
    itemIds: [],
    active: true,
    validUntil: "2024-12-31",
  },
  {
    id: "offer-item-1",
    name: "BOGO Paneer Tikka",
    code: "BOGOPANEER",
    discount: "BOGO",
    scope: "item",
    categoryName: null,
    subCategoryName: null,
    itemIds: [1], // "Paneer Tikka" has id=1
    active: true,
    validUntil: "2024-12-31",
  },
];
