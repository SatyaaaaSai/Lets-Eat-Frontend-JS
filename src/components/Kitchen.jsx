import Header from "./Header";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
const Kitchen=()=>{
    const rating = 3.7;
    const area = "Bhimavaram";
    return(
        <main>
            <Header/>
            {/* Detail's  About Resturant*/}
            <section className="bg-gray-100">
                <div>
                    <h1 className="text-3xl">Lalitha's Kitchen</h1>
                    <div className="flex items-center">
                    {[...Array(5)].map((_,index)=>{
                            const filledstar = Math.floor(rating);
                            const isHalfStar = rating - filledstar >= 0.5
                            if(index < filledstar){
                                return <MdStar key={index} className="h-5 w-5 text-yellow-400" />
                            }
                            else if(index === filledstar && isHalfStar){
                                return <MdStar key={index} className="h-5 w-5 text-transparent" />
                            }
                            else{
                                return <MdStar key={index} className="h-5 w-5 text-transparent" />
                            }
                    })} <span className="px-2">{rating}</span>
                    </div>
                    <div className="flex flex-col">
                        <ul>
                            <h1>Food Items Avaliable</h1>
                            <li>Meals</li>
                            <li>Curries</li>
                            <li>Snacks</li>
                        </ul>
                    </div>
                    <div>OutLet : {area}</div>
                </div>
            </section>
        </main>
    );
}
export default Kitchen;