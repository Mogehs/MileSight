import React from "react";
import Hero from "../components/products/iot-sensing/Hero";
import NavSection from "../components/products/iot-sensing/NavSection";
import SensorSection from "../components/products/iot-sensing/SensorSection";
import Gateway from "../components/products/iot-sensing/GatewaySection";
import ControllerSection from "../components/products/iot-sensing/ControllerSection";
import DisplaySection from "../components/products/iot-sensing/DisplaySection";
import DemoKitSection from "../components/products/iot-sensing/DemoKitSection";
import FormSection from "../components/products/iot-sensing/FormSection";

const IoTSensing = () => {
  return (
    <div>
      <Hero />
      <NavSection />
      <SensorSection />
      <Gateway />
      <ControllerSection />
      <DisplaySection />
      <DemoKitSection />
      <FormSection />
    </div>
  );
};

export default IoTSensing;
