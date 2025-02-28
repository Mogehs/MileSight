import React from "react";
import Hero from "../components/solutions/smart-space/Hero";
import NavSection from "../components/solutions/smart-space/NavSection";
import SmartSpaceSection from "../components/solutions/smart-space/SmartSpaceSection";
import CorporateSection from "../components/solutions/smart-space/CorporateSection";
import D2dSection from "../components/solutions/smart-space/D2dSection";
import ProductSection from "../components/solutions/smart-space/ProductSection";
import TypesSection from "../components/solutions/smart-space/TypesSection";
import SuccessSection from "../components/solutions/smart-space/SuccessSection";

function SmartSpace() {
  return (
    <div>
      <Hero />
      <NavSection />
      <SmartSpaceSection />
      <CorporateSection />
      <D2dSection />
      <ProductSection />
      <TypesSection />
      <SuccessSection />
    </div>
  );
}

export default SmartSpace;
