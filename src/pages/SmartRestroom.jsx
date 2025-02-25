import React from "react";
import Hero from "../components/solutions/smart-restroom/Hero";
import NavSection from "../components/solutions/smart-restroom/NavSection";
import SmartnessSection from "../components/solutions/smart-restroom/SmartnessSection";
import TraditionalSection from "../components/solutions/smart-restroom/TraditionalSection";
import RestroomSection from "../components/solutions/smart-restroom/RestroomSection";
import BenefitSection from "../components/solutions/smart-restroom/BenefitSection";
import ProductSection from "../components/solutions/smart-restroom/ProductSection";
import ApplicationSection from "../components/solutions/smart-restroom/ApplicationSection";
import FormSection from "../components/solutions/smart-restroom/FormSection";

function SmartRestroom() {
  return (
    <div>
      <Hero />
      <NavSection />
      <SmartnessSection />
      <TraditionalSection />
      <RestroomSection />
      <BenefitSection />
      <ProductSection />
      <ApplicationSection />
      <FormSection />
    </div>
  );
}

export default SmartRestroom;
