import React from "react";
import Hero from "../components/products/5g-cellular/Hero";
import NavSection from "../components/products/5g-cellular/NavSection";
import FivegSection from "../components/products/5g-cellular/5gSection";
import RouterSection from "../components/products/5g-cellular/RouterSection";
import ControllerSection from "../components/products/5g-cellular/ControllerSection";
import SwitchSection from "../components/products/5g-cellular/SwitchSection";
import FormSection from "../components/products/5g-cellular/FormSection";

const FiveGCellular = () => {
  return (
    <div>
      <Hero />
      <NavSection />
      <FivegSection />
      <RouterSection />
      <ControllerSection />
      <SwitchSection />
      <FormSection />
    </div>
  );
};

export default FiveGCellular;
