import Header from "./Header";
import { IoMdCart } from "react-icons/io";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { MEALS_URL, SNACK_URL ,CURRY_URL,RES_URL} from "../assets/assests";
import { useState } from "react";
const Kitchen = () => {
  const rating = 3.7;
  const area = "Bhimavaram";
  const[currys, setCurrys] = useState(false);
  const[meals, setMeals] = useState(false);
  const[snacks, setSnacks] = useState(false);
  // Home Food menu 
  const foodItems = [
    {
        name: 'Spaghetti Bolognese',
        imgUrl: RES_URL,
        cost: 12.99,
        meals:false,
    },
    {
        name: 'Chicken Curry',
        imgUrl: RES_URL,
        cost: 10.99,
        meals:false,
    },
    {
        name: 'Vegetable Stir Fry',
        imgUrl: RES_URL,
        cost: 8.99,
        meals:false,
    },
    {
        name: 'Beef Tacos',
        imgUrl: RES_URL,
        cost: 9.99,
        snacks:false,
    },
    {
        name: 'Margherita Pizza',
        imgUrl: RES_URL,
        cost: 11.49,
        snacks:false,
    },
    {
        name: 'Caesar Salad',
        imgUrl: RES_URL,
        cost: 7.99,
        snacks:false,
    },
    {
        name: 'Shrimp Fried Rice',
        imgUrl: RES_URL,
        cost: 10.49,
        currys:false,
    },
    {
        name: 'Lentil Soup',
        imgUrl: RES_URL,
        cost: 6.99,
        currys:false,
    },
    {
        name: 'Grilled Cheese Sandwich',
        imgUrl: RES_URL,
        cost: 5.99,
        currys:false,
    },
    {
        name: 'Chocolate Cake',
        imgUrl: RES_URL,
        cost: 4.99,
        currys:false,
    },
  ];

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
            <div className="w-[53rem] ">
                <div>
                    <div className="flex items-center justify-evenly text-black p-4 text-2xl">
                        <div className="cursor-pointer hover:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2">All Items</div>
                        <div className="cursor-pointer hover:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2">Meals</div>
                        <div className="cursor-pointer hover:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2">Currys</div>
                        <div className="cursor-pointer hover:bg-blue-500 rounded-2xl transition-all ease-in-out text-black px-4 py-2">Snacks</div>
                    </div>
                    <div className="w-[53rem] h-2 border-dashed border-t-2 border-gray-500">
                    </div>
                </div>
                <div>
                  {foodItems.map((item,index)=>(
                    <div className="w-[48rem] m-auto">
                      <div key={index} className="flex justify-between items-center">
                        <div>
                        <img src={item.imgUrl} alt={item.name} className="w-28 h-w-28" />
                        </div>
                        <div>
                          <h6 className="text-2xl mr-[100px]">{item.name}</h6>
                        </div>
                        <div>
                            <p className="text-2xl">${item.cost}</p>
                            <button className="bg-gray-500 p-2 focus:bg-white"><IoMdCart className="w-8 h-8"/></button>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>

    </main>
  );
};
export default Kitchen;
