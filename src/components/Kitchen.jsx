import Header from "./Header";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { MEALS_URL, SNACK_URL ,CURRY_URL} from "../assets/assests";
const Kitchen = () => {
  const rating = 3.7;
  const area = "Bhimavaram";
  return (
    <main>
      <Header />
      {/* Detail's  About Resturant*/}
      <section className=" flex justify-center items-center gap-y-8">
        <div className="bg-gradient-to-b from-white to-gray-200 w-[850px] sm:w-[450px] md:w-[850px] md:flex-1 flex justify-center items-center rounded-b-2xl px-4 py-4">
          <div className="border-solid border-2 border-white-700 rounded-[20px] w-[850px] px-4 py-2">
            <div className="flex items-center justify-between text-center">
              <h1 className="text-3xl font-sans">Lalitha's Kitchen</h1>
              <h2 className="text-1xl">Open/Close</h2>
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
              <h1 className="text-[20px] font-mono">Food Items Avaliable</h1>
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
                      alt=""
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
    </main>
  );
};
export default Kitchen;
