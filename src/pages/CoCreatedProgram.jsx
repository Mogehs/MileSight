import React from "react";
import Hero from "../components/products/cocreated-program/Hero";
import JoinTheFuture from "../components/products/cocreated-program/JoinTheFuture";
import FormSection from "../components/products/iot-sensing/FormSection";
import CoCreatedProducts from "../components/products/cocreated-program/CoCreatedProducts";

const CoCreatedProgram = () => {
  return (
    <div>
      <Hero />
      <JoinTheFuture />
      <CoCreatedProducts />
      <FormSection />
    </div>
  );
};

export default CoCreatedProgram;
