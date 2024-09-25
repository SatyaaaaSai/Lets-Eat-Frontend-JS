<<<<<<< HEAD
import React, { useState } from "react";
=======
/* eslint-disable react/prop-types */
import { useState } from "react";
>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
import { FaStar } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const IndividualRestroCard = ({ restaurant, menu }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
<<<<<<< HEAD
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYg75MwnaJEF1gxCfVaQzeIX7xEH0Fjs-sQ&s" alt={restaurant.name} className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0" />
=======
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYg75MwnaJEF1gxCfVaQzeIX7xEH0Fjs-sQ&s"
          alt={restaurant.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
        />
>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
        <div className="md:ml-8">
          <h2 className="text-3xl font-bold mb-2">{restaurant.name}</h2>
          <p className="text-lg mb-2">{restaurant.location}</p>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-lg">{restaurant.rating}</span>
          </div>
          <p className="text-lg">{restaurant.specialization}</p>
        </div>
      </div>

      <div className="mt-8">
        <button
          className="flex items-center justify-between w-full p-4 bg-blue-600 text-white rounded-md shadow-md"
          onClick={toggleAccordion}
        >
          <span className="text-lg font-semibold">Menu</span>
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {open && (
          <div className="mt-4">
            {menu.map((item) => (
<<<<<<< HEAD
              <div key={item.id} className="flex items-center justify-between bg-white p-4 mb-4 rounded-md shadow-md">
=======
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 mb-4 rounded-md shadow-md"
              >
>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-md object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
<<<<<<< HEAD
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
                <div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md">Add +</button>
=======
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
                <div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md">
                    Add +
                  </button>
>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualRestroCard;
