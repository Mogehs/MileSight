import React from "react";

const data = [
  {
    id: 1,
    img: "/Solution/smart-hvac/what-icon1.png",
    text: "Energy Efficiency",
  },
  {
    id: 2,
    img: "/Solution/smart-hvac/what-icon2.png",
    text: "Enhanced Comfort",
  },
  {
    id: 3,
    img: "/Solution/smart-hvac/what-icon3.png",
    text: "Cost Saving",
  },
  {
    id: 4,
    img: "/Solution/smart-hvac/what-icon4.png",
    text: "Reduced Cabling Costs",
  },
  {
    id: 5,
    img: "/Solution/smart-hvac/what-icon5.png",
    text: "Centralized Management",
  },
];

function WhatSection() {
  return (
    <div id="hvac-what" className="my-8">
      <div
        className="min-h-[100vh] bg-cover bg-center text-white p-4 flex flex-col gap-6 justify-center items-start"
        style={{
          backgroundImage: "url('/Solution/smart-hvac/what-bg-img.jpg')",
        }}
      >
        <div className="md:w-[50%]">
          <h2 className="md:text-[2rem] text-[25px]">
            A Smart HVAC Is a Smart System
          </h2>
          <p className="text-sm">
            Smart HVAC systems combine advanced sensors, thermostats, and
            platform to optimize the energy consumption and comfort levels of
            heating and cooling systems. These systems provide an intelligent
            and automated approach to managing indoor climate control. By
            utilizing real-time data from smart devices, smart HVAC systems can
            adjust temperature settings, monitor air quality, and even detect
            maintenance issues.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:w-[50%]">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center gap-4
                ${
                  index === 0 || index === 1 || index === 3 || index === 4
                    ? "md:border-r md:border-[#99a2b1]"
                    : ""
                }`}
            >
              <img src={item.img} alt="not found" />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatSection;
