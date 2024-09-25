/* eslint-disable react/prop-types */
// import { CiStar } from "react-icons/ci"; // Replace with appropriate icon library if needed
import { RES_URL } from "../assets/assests";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import Kitchen from "./Kitchen";
import "./Common.css";
function App() {
  const restaurants = [
    {
      imageSrc: RES_URL,
      title: "Gourmet Grill",
      description: "Delectable grilled dishes and a cozy ambiance.",
      rating: 4.5,
    },
    {
      imageSrc: RES_URL,
      title: "Sushi Delight",
      description: "Exquisite sushi and Japanese cuisine.",
      rating: 3.5,
    },
    {
      imageSrc: RES_URL,
      title: "Italian Bistro",
      description: "Authentic Italian cuisine in a cozy setting.",
      rating: 4.8,
    },
    {
      imageSrc: RES_URL,
      title: "Spice Emporium",
      description: "Flavorful Indian cuisine in a vibrant setting.",
      rating: 4.6,
    },
  ];

  return (
    <section className="py-12 md:py-20 " id="animi">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Our Restaurants</h2>
          <p className="text-gray-600">
            Discover our diverse collection of restaurants, each offering a
            unique dining experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              imageSrc={restaurant.imageSrc}
              title={restaurant.title}
              description={restaurant.description}
              rating={restaurant.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RestaurantCard({ imageSrc, title, description, rating }) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden m-4 p-4">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-t-lg object-cover"
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
      />
      <div className="p-4">
        <div className="mb-2 text-lg font-bold">{title}</div>
        <div className="mb-2 text-gray-600">{description}</div>
        <div className="mb-4 flex items-center gap-2">
          {[...Array(5)].map((_, index) => {
            const filledStars = Math.floor(rating);
            const isHalfStar = rating - filledStars >= 0.5;
            if (index < filledStars) {
              return <MdStar key={index} className="h-5 w-5 text-yellow-500" />;
            } else if (index === filledStars && isHalfStar) {
              return (
                <MdStarHalf key={index} className="h-5 w-5 text-yellow-500" />
              );
            } else {
              return (
                <MdStarOutline key={index} className="h-5 w-5 text-gray-300" />
              );
            }
          })}
          <span className="text-gray-600">{rating.toFixed(1)}</span>
        </div>

        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded w-full hover:bg-blue-500 hover:text-slate-100">
          View Details
        </button>
      </div>
    </div>
  );
}

export default App;

// import { RES_URL } from "../assets/assests";
// import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
// // import { useNavigate } from "react-router-dom";
// import Kitchen from "./Kitchen";
// function App() {
//   // const navigate = useNavigate();

//   const KitchenDetails = () => {
//     // <Kitchen/>
//     // navigate(<Kitchen/>);
//   }

//   const restaurants = [
//     {
//       imageSrc: RES_URL,
//       title: "Gourmet Grill",
//       description: "Delectable grilled dishes and a cozy ambiance.",
//       rating: 4.5,
//     },
//     {
//       imageSrc: RES_URL,
//       title: "Sushi Delight",
//       description: "Exquisite sushi and Japanese cuisine.",
//       rating: 3.5,
//     },
//     {
//       imageSrc: RES_URL,
//       title: "Italian Bistro",
//       description: "Authentic Italian cuisine in a cozy setting.",
//       rating: 4.8,
//     },
//     {
//       imageSrc: RES_URL,
//       title: "Spice Emporium",
//       description: "Flavorful Indian cuisine in a vibrant setting.",
//       rating: 4.6,
//     },
//   ];

//   return (
//     <section className="py-12 md:py-20">
//       <div className="container mx-auto">
//         <div className="mb-8 text-center">
//           <h2 className="text-3xl font-bold">Our Restaurants</h2>
//           <p className="text-gray-600">
//             Discover our diverse collection of restaurants, each offering a
//             unique dining experience.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {restaurants.map((restaurant, index) => (
//             <RestaurantCard
//               key={index}
//               imageSrc={restaurant.imageSrc}
//               title={restaurant.title}
//               description={restaurant.description}
//               rating={restaurant.rating}
//               onClick={KitchenDetails} // Pass KitchenDetails as a prop
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function RestaurantCard({ imageSrc, title, description, rating, onClick }) {
//   return (
//     <div className="border rounded-lg shadow-sm overflow-hidden m-4 p-4">
//       <img
//         src={imageSrc}
//         alt={title}
//         className="rounded-t-lg object-cover"
//         style={{ aspectRatio: "400/300", objectFit: "cover" }}
//       />
//       <div className="p-4">
//         <div className="mb-2 text-lg font-bold">{title}</div>
//         <div className="mb-2 text-gray-600">{description}</div>
//         <div className="mb-4 flex items-center gap-2">
//           {[...Array(5)].map((_, index) => {
//             const filledStars = Math.floor(rating);
//             const isHalfStar = rating - filledStars >= 0.5;
//             if (index < filledStars) {
//               return <MdStar key={index} className="h-5 w-5 text-yellow-500" />;
//             } else if (index === filledStars && isHalfStar) {
//               return (
//                 <MdStarHalf key={index} className="h-5 w-5 text-yellow-500" />
//               );
//             } else {
//               return (
//                 <MdStarOutline key={index} className="h-5 w-5 text-gray-300" />
//               );
//             }
//           })}
//           <span className="text-gray-600">{rating.toFixed(1)}</span>
//         </div>
//         <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded w-full hover:bg-blue-500 hover:text-slate-100" onClick={onClick}>
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

