import CustomerTestimonials from "../components/CustomerTestimonals";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import MenuSection from "../components/MenuSection";
// import MultipleRestruants from "../components/MultipleRestruants";
import RestaurantCard from "../components/ResturantCard";
import { Outlet } from "react-router-dom";
// import Kitchen from "../components/Kitchen";
const LandingPage = () => {
  return (
    <div className="!scroll-smooth">
      <Header/>
      <MainPage />
      <RestaurantCard />
      <MenuSection />
      <CustomerTestimonials />
      <Footer/>
      {/* <Kitchen/> */}
      <Outlet />
    </div>
  );
};

export default LandingPage;
