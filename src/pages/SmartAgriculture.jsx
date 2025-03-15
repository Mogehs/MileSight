import React from "react";
import Hero from "../components/solutions/smart-agriculture/Hero";
import NavSection from "../components/solutions/smart-agriculture/NavSection";
import Heading from "../components/solutions/smart-agriculture/Heading";
import Challenges from "../components/solutions/smart-agriculture/Challenges";
import Smart from "../components/solutions/smart-agriculture/Smart";
import Products from "../components/solutions/smart-agriculture/Products";
import Benefit from "../components/solutions/smart-agriculture/Benefit";
import Success from "../components/solutions/smart-agriculture/Success";
import FormSection from "../components/solutions/smart-restroom/FormSection";

function SmartAgriculture() {
  return (
    <div>
      <Hero />
      <NavSection />
      <Heading />
      <Challenges />
      <Smart />
      <Products />
      <Benefit />
      <Success />
      <FormSection />
    </div>
  );
}

export default SmartAgriculture;
