import Header from "./Header";
import { IoMdCart } from "react-icons/io";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { MEALS_URL, SNACK_URL ,CURRY_URL,RES_URL} from "../assets/assests";
import { useState } from "react";
import { data } from "autoprefixer";
const Kitchen = () => {
  const rating = 3.7;
  const area = "Bhimavaram";
  // const[currys, setCurrys] = useState(true);
  // const[meals, setMeals] = useState(true);
  // const[snacks, setSnacks] = useState(true);
  // Home Food menu 
  const foodItems = [
    {
        name: 'Spaghetti Bolognese',
        imgUrl: RES_URL,
        cost: 12.99,
        check:true,
        itemstype:"snacks",
    },
    {
        name: 'Chicken Curry',
        imgUrl: RES_URL,
        cost: 10.99,
        check:true,
        itemstype:"currys",
    },
    {
        name: 'Vegetable Stir Fry',
        imgUrl: RES_URL,
        cost: 8.99,
        check:true,
        itemstype:"currys",
    },
    {
        name: 'Beef Tacos',
        imgUrl: RES_URL,
        cost: 9.99,
        check:true,
        itemstype:"meals",
    },
    {
        name: 'Margherita Pizza',
        imgUrl: RES_URL,
        cost: 11.49,
        check:true,
        itemstype:"snacks",
    },
    {
        name: 'Caesar Salad',
        imgUrl: RES_URL,
        cost: 7.99,
        check:true,
        itemstype:"meals",
    },
    {
        name: 'Shrimp Fried Rice',
        imgUrl: RES_URL,
        cost: 10.49,
        check:true,
        itemstype:"meals",
    },
    {
        name: 'Lentil Soup',
        imgUrl: RES_URL,
        cost: 6.99,
        check:true,
        itemstype:"meals",
    },
    {
        name: 'Grilled Cheese Sandwich',
        imgUrl: RES_URL,
        cost: 5.99,
        check:true,
        itemstype:"snacks",
    },
    {
        name: 'Chocolate Cake',
        imgUrl: RES_URL,
        cost: 4.99,
        check:true,
        itemstype:"snacks",
    },
  ];

  const[filter,setFilter] = useState("all");

  // const filterItems = (filterType) => {
  //   filter = filterType;
  //   renderItems(); 
  // };

  const renderItems = () => {
    const filteredItems = filter === "all" 
      ? foodItems 
      : foodItems.filter(item => item.itemstype === filter);

    return filteredItems.map((item, index) => (
      <div className="w-[48rem] m-auto" key={index}>
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-10">
            <img src={item.imgUrl} alt={item.name} className="w-28 h-w-28" />
            <h6 className="text-2xl mr-[100px]">{item.name}</h6>
          </div>
          <div className="float-right">
            <p className="text-2xl">${item.cost}</p>
            <button className="bg-gray-500 p-2 float-right focus:bg-white">
              <IoMdCart className="w-8 h-8" />
            </button>
          </div>
        </div>
        <br />
      </div>
    ));
  };
  
  return (
    <main>
      <Header />
      {/*------ Detail's  About Resturant--------*/}
      <section className=" flex justify-center items-center gap-y-8">
        <div className="bg-gradient-to-b from-gray-200 to-white w-[850px] sm:w-[450px] md:w-[850px] md:flex-1 flex justify-center items-center rounded-b-2xl px-4 py-4">
          <div className="border-solid border-2 border-gray-300 rounded-[20px] w-[850px] px-4 py-2">
            <div className="flex items-center justify-between text-center">
              <h1 className="text-3xl font-Poppins">Lalitha's Kitchen</h1>
              <h2 className="text-1xl cursor-pointer">Open/Close</h2>
            </div>
            <div className="flex item-center">
              {[...Array(5)].map((_, index) => {
                const filledstar = Math.floor(rating);
                const isHalfStar = rating - filledstar >= 0.5;
                if (index < filledstar) {
                  return (
                    <MdStar key={index} className="h-5 w-5 text-yellow-400" />
                  );
                } else if (index === filledstar && isHalfStar) {
                  return (
                    <MdStar key={index} className="h-5 w-5 text-transparent" />
                  );
                } else {
                  return (
                    <MdStar key={index} className="h-5 w-5 text-transparent" />
                  );
                }
              })}
              {/* <span className="px-2">{rating}</span> */}
            </div>
            <div>
              <h1 className="text-[20px] font-Poppins">Food Items Avaliable</h1>
              <ul className="flex flex-wrap justify-between px-4 font-serif">
                <li>
                  <div className="text-center text-2xl">
                    <img
                      className="w-[180px] h-[170px]"
                      src={MEALS_URL}
                      alt="meals"
                    />
                    <span>Meals</span>
                  </div>
                </li>
                <li>
                  <div className="text-center text-2xl">
                    <img
                      className="w-[180px] h-[170px]"
                      src={CURRY_URL}
                      alt="currys"
                    />
                    <span>Curry's</span>
                  </div>
                </li>
                <li>
                  <div className="text-center text-2xl">
                    <img
                      className="w-[190px] h-[170px]"
                      src={SNACK_URL}
                      alt="snacks"
                    />
                    <span>Snacks</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>OutLet : {area}</div>
          </div>
        </div>
      </section>
      {/* -----Items Avaliable---- */}
      <section className="flex justify-center">
      <div className="w-[53rem]">
        <div>
          <div className="flex items-center justify-evenly text-black p-4 text-2xl">
            <button
              className="cursor-pointer hover:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2"
              onClick={() => setFilter("all")}
            >
              All Items
            </button>
            <button
              onClick={() => setFilter("meals")}
              className="cursor-pointer focus:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2"
            >
              Meals
            </button>
            <button
              onClick={() => setFilter("currys")}
              className="cursor-pointer focus:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2"
            >
              Currys
            </button>
            <button
              onClick={() => setFilter("snacks")}
              className="cursor-pointer focus:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2"
            >
              Snacks
            </button>
          </div>
          <div className="w-[53rem] h-2 border-dashed border-t-2 border-gray-500"></div>
        </div>
        {/* Dynamically generate the Menu */}
        <div>
          {renderItems()}
        </div>
      </div>
    </section>

    </main>
  );
};
export default Kitchen;

