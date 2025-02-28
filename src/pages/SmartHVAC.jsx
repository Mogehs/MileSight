import React from "react";
import Hero from "../components/solutions/smart-hvac/Hero";
import NavSection from "../components/solutions/smart-hvac/NavSection";
import WhySection from "../components/solutions/smart-hvac/WhySection";
import WhatSection from "../components/solutions/smart-hvac/WhatSection";
import HowSection from "../components/solutions/smart-hvac/HowSection";
import QASection from "../components/solutions/smart-hvac/Q&ASection";
import FormSection from "../components/solutions/smart-restroom/FormSection";

function SmartHVAC() {
  return (
    <div>
      <Hero />
      <NavSection />
      <WhySection />
      <WhatSection />
      <HowSection />
      <QASection />
      <FormSection />
    </div>
  );
}

export default SmartHVAC;
