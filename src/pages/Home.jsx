import Academy from "../components/home/Academy";
import Hero from "../components/home/Hero";
import Innovation from "../components/home/Innovation";
import MakeMatter from "../components/home/MakeMatter";
import Products from "../components/home/Products";
import Solution from "../components/home/Solution";
import SuccessStories from "../components/home/SuccessStories";
import FormSection from "../components/products/iot-sensing/FormSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <MakeMatter />
      <Solution />
      <Innovation />
      <SuccessStories />
      <Academy />
      <FormSection />
    </div>
  );
};

export default Home;
