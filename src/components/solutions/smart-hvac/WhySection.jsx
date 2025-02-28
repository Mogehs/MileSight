import React from "react";
import FloatingIcons from "../../products/5g-cellular/FloatingIcons";

const WhySection = () => {
  return (
    <div
      id="hvac-why"
      className="flex md:flex-row flex-col justify-center gap-6 my-8 p-4"
    >
      <FloatingIcons />
      <img
        className=" md:w-[50%] rounded-xl"
        src="/Solution/smart-hvac/why-img.jpg"
        alt="not found"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="md:text-[2rem] text-[25px] text-[#333]">
          It All Begins with Sensing and Response
        </h2>
        <p className="text-[#666] text-sm">
          In the modern era, HVAC (Heating, Ventilation, and Air Conditioning)
          systems have become indispensable components of residential,
          commercial, and industrial buildings. These systems play a crucial
          role in maintaining indoor comfort by regulating temperature,
          humidity, and air quality. However, their widespread use comes with a
          significant energy cost. According to the U.S. Energy Information
          Administration (EIA), HVAC systems account for approximately 40% of
          total energy consumption in commercial buildings and 35% in
          residential buildings. This staggering statistic underscores the
          importance of understanding how HVAC systems contribute to energy
          consumption and exploring strategies to improve their efficiency.
        </p>
        <p className="text-[#666] text-sm">
          As one of the main systems in a building, traditional HVAC systems
          provide comfort but potentially consuming more energy without even
          realizing it. With smart HVAC management, facility managers and
          building owners are able to so much more and better.
        </p>
      </div>
    </div>
  );
};

export default WhySection;
