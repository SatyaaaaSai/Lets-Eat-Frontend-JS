/* eslint-disable react/prop-types */
import  { useState } from "react";
<<<<<<< HEAD
import "./Common.css";
=======

>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("vegetarian");

  return (
<<<<<<< HEAD
    <section className="bg-gray-100 py-12 md:py-20 sm:py-auto" id="animi" >
=======
    <section className="bg-gray-100 py-12 md:py-20">
>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Our Menu</h2>
          <p className="text-gray-600">
            Explore our diverse menu featuring both vegetarian and non-vegetarian options.
          </p>
        </div>
        <div className="mb-8 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "vegetarian" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("vegetarian")}
          >
            Vegetarian
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "non-vegetarian" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("non-vegetarian")}
          >
            Non-Vegetarian
          </button>
        </div>
        <div className="m-4 p-4"> 
          {activeTab === "vegetarian" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card
                title="Vegetable Biryani"
                description="Aromatic basmati rice with mixed vegetables."
                price="$12.99"
              />
              <Card
                title="Tofu Stir-Fry"
                description="Crispy tofu with fresh vegetables in a savory sauce."
                price="$10.99"
              />
              <Card
                title="Vegetable Lasagna"
                description="Layers of pasta, vegetables, and creamy béchamel sauce."
                price="$14.99"
              />
            </div>
          )}
          {activeTab === "non-vegetarian" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card
                title="Grilled Salmon"
                description="Tender salmon fillet grilled to perfection."
                price="$18.99"
              />
              <Card
                title="Beef Stroganoff"
                description="Tender beef in a creamy mushroom sauce."
                price="$16.99"
              />
              <Card
                title="Chicken Tikka Masala"
                description="Marinated chicken in a creamy, spiced tomato sauce."
                price="$15.99"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description, price }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="mb-2 text-lg font-bold">{title}</div>
        <div className="mb-2 text-gray-600">{description}</div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-blue-600 font-bold">{price}</span>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-slate-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
