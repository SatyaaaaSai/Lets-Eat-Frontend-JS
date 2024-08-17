import CustomerTestimonials from "../components/CustomerTestimonals";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import MenuSection from "../components/MenuSection";
import MultipleRestruants from "../components/MultipleRestruants";
import RestaurantCard from "../components/ResturantCard";
const LandingPage = () => {
  return (
    <div>
      <Header/>
      <MainPage />
      <RestaurantCard />
      <MenuSection />
      <CustomerTestimonials />
      <MultipleRestruants/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
