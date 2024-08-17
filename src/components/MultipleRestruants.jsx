import { useState } from "react";
import IndividualRestroCard from "./IndividualRestroCard";

const restaurants = [
  {
    id: 1,
    name: "Delicious Bites",
    location: "123 Main St",
    rating: 4.5,
    specialization: "Italian Cuisine",
    menu: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish.",
        image: "/images/carbonara.jpg",
        price: "$12.99",
      },
      {
        id: 2,
        name: "Margherita Pizza",
        description: "Traditional pizza with fresh tomatoes and mozzarella.",
        image: "/images/margherita.jpg",
        price: "$9.99",
      },
    ],
  },
  {
    id: 2,
    name: "Tasty Treats",
    location: "456 Market St",
    rating: 4.0,
    specialization: "Desserts",
    menu: [
      {
        id: 1,
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a molten center.",
        image: "/images/lava-cake.jpg",
        price: "$6.99",
      },
      {
        id: 2,
        name: "Cheesecake",
        description: "Creamy cheesecake with a graham cracker crust.",
        image: "/images/cheesecake.jpg",
        price: "$7.99",
      },
    ],
  },
];

const MultipleRestaurants = () => {
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  const handleRestaurantChange = (id) => {
    const selectedRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setCurrentRestaurant(selectedRestaurant);
  };

  return (
    <div>
      {/* Restaurant Selector */}
      <div className="restaurant-selector flex gap-4">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleRestaurantChange(restaurant.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {restaurant.name}
          </button>
        ))}
      </div>

      {/* Show Restaurant Details only if a restaurant is selected */}
      {currentRestaurant && (
        <IndividualRestroCard
          restaurant={currentRestaurant}
          menu={currentRestaurant.menu}
        />
      )}
    </div>
  );
};

export default MultipleRestaurants;
