export default {
  "deliveryCategories": [
    {
      "name": "Starters",
      "subcategories": [
        {
          "name": "Veg Starters",
          "items": [
            {
              "id": 1,
              "name": "Paneer Tikka",
              "type": "Veg",
              "category": "Starters",
              "subCategory": "Veg Starters",
              "offer": "10% Off",
              "serviceType": [
                "Delivery",
                "Takeaway"
              ],
              "pricing": 250,
              "taxes": "5% GST",
              "charges": "No Extra Charge",
              "description": "Soft paneer marinated in spices and grilled to perfection.",
              "dishDetails": {
                "servingInfo": "2 Pieces",
                "calorieCount": "250 kcal",
                "portionSize": "Medium",
                "preparationTime": "15 mins"
              },
              "images": [
                "https://via.placeholder.com/150"
              ],
              "video": null
            },
            {
              "id": 2,
              "name": "Veg Spring Rolls",
              "type": "Veg",
              "category": "Starters",
              "subCategory": "Veg Starters",
              "offer": "No Offer",
              "serviceType": [
                "Delivery"
              ],
              "pricing": 200,
              "taxes": "5% GST",
              "charges": "No Extra Charge",
              "description": "Crispy rolls stuffed with fresh vegetables.",
              "dishDetails": {
                "servingInfo": "4 Pieces",
                "calorieCount": "300 kcal",
                "portionSize": "Large",
                "preparationTime": "20 mins"
              },
              "images": [
                "https://via.placeholder.com/150"
              ],
              "video": null
            }
          ]
        }
      ]
    },
    {
      "name": "Main Course",
      "subcategories": [
        {
          "name": "Non-Veg Main Course",
          "items": [
            {
              "id": 3,
              "name": "Butter Chicken",
              "type": "Non-Veg",
              "category": "Main Course",
              "subCategory": "Non-Veg Main Course",
              "offer": "20% Off",
              "serviceType": [
                "Takeaway"
              ],
              "pricing": 350,
              "taxes": "5% GST",
              "charges": "No Extra Charge",
              "description": "Tender chicken cooked in creamy butter sauce.",
              "dishDetails": {
                "servingInfo": "1 Portion",
                "calorieCount": "400 kcal",
                "portionSize": "Large",
                "preparationTime": "25 mins"
              },
              "images": [
                "https://via.placeholder.com/150"
              ],
              "video": null
            }
          ]
        }
      ]
    }
  ],
  "dineInCategories": [
    {
      "name": "Appetizers",
      "subcategories": [
        {
          "name": "Veg Appetizers",
          "items": [
            {
              "id": 4,
              "name": "Hara Bhara Kebab",
              "type": "Veg",
              "category": "Appetizers",
              "subCategory": "Veg Appetizers",
              "offer": "No Offer",
              "serviceType": [
                "Dine-In"
              ],
              "pricing": 180,
              "taxes": "5% GST",
              "charges": "No Extra Charge",
              "description": "Delicious kebabs made from spinach and peas.",
              "dishDetails": {
                "servingInfo": "6 Pieces",
                "calorieCount": "150 kcal",
                "portionSize": "Small",
                "preparationTime": "15 mins"
              },
              "images": [
                "https://via.placeholder.com/150"
              ],
              "video": null
            }
          ]
        }
      ]
    }
  ],
  "dropdownOptions": {
    "categories": [
      "Starters",
      "Main Course",
      "Snacks",
      "Soups & Salads",
      "Breads",
      "Beverages"
    ],
    "subCategories": [
      "Veg Starters",
      "Non-Veg Starters",
      "Veg Main Course",
      "Non-Veg Main Course"
    ],
    "offers": [
      "No Offer",
      "10% Off",
      "20% Off"
    ],
    "foodTypes": [
      "Veg",
      "Non-Veg",
      "Egg"
    ],
    "serviceTypes": [
      "Delivery",
      "Takeaway"
    ]
  }
}

export const dummyData = {
  notifications: [
    { id: 1, text: "New order received" },
    { id: 2, text: "Inventory needs replenishment" },
  ],
  outletInfo: {
    name: "Example Outlet",
    image: "path/to/profile-image.jpg",
    details: "Complete address and contact info",
  },
};

export const offersData = [
  {
    id: "offer1",
    name: "50% Off Your Next Purchase",
    description: "Get 50% off your next purchase with this exclusive offer.",
    validUntil: "2023-12-31",
    active: true,
  },
  {
    id: "offer2",
    name: "Free Shipping",
    description: "Enjoy free shipping on orders over $50.",
    validUntil: "2023-11-30",
    active: false,
  },
];

// src/data/dummy.js

export const outletData = {
    name: "My Outlet",
    resId: "RES123",
    address: "123 Main St, Anytown, AT 12345"
};
