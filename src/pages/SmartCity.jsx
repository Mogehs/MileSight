import Start from "../components/solutions/smart-city/Start";
import NavSection from "../components/solutions/smart-city/NavSection";
import Challenges from "../components/solutions/smart-city/Challenges";
import ApplicationProducts from "../components/solutions/smart-city/ApplicationProducts";
import Benefit from "../components/solutions/smart-city/Benefit";
import SuccessStories from "../components/solutions/smart-city/SuccessStories";
import FormSection from "../components/solutions/smart-restroom/FormSection";

const SmartCity = () => {
  return (
    <div>
      <Start />
      <NavSection />
      <Challenges />
      <ApplicationProducts />
      <Benefit />
      <SuccessStories />
      <FormSection />
    </div>
  );
};

export default SmartCity;
