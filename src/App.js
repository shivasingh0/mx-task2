import "./App.css";
import Categories from "./components/categories/Categories";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import StandoutDishes from "./components/StandoutDishes/StandoutDishes";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <StandoutDishes />
      <Testimonials />
      <Services />
      <Footer />
    </>
  );
}

export default App;
