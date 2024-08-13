import CustomerTestimonials from "../components/CustomerTestimonals";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import MenuSection from "../components/MenuSection";
import RestaurantCard from "../components/ResturantCard";
const LandingPage = () => {
  return (
    <div>
      <Header/>
      <MainPage />
      <RestaurantCard />
      <MenuSection />
      <CustomerTestimonials />
    </div>
  );
};

export default LandingPage;
