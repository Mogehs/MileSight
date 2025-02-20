import React from "react";

const data = [
  {
    img: "/iot-sensing/10-pic1.png",
    para1: "SG50",
    para2: "Ultra Low Power Solar LoRaWAN® Gateway",
  },
  {
    img: "/iot-sensing/10-pic2.png",
    para1: "UG63",
    para2: "Mini LoRaWAN® Gateway",
  },
  {
    img: "/iot-sensing/10-pic3.png",
    para1: "UG56",
    para2: "Industrial LoRaWAN® Gateway",
  },
  {
    img: "/iot-sensing/9-pic1.png",
    para1: "UG65",
    para2: "Indoor LoRaWAN® Gateway",
  },
  {
    img: "/iot-sensing/9-pic2.png",
    para1: "UG67",
    para2: "Outdoor LoRaWAN® Gateway",
  },
  {
    img: "/iot-sensing/9-pic3.png",
    para1: "UPS01",
    para2: "Uninterruptible Power Supply",
  },
];

function GatewaySection() {
  return (
    <div className="mt-4 p-4">
      <div className="p-4">
        {" "}
        <h2 className="md:text-[3rem] text-[25px] text-center text-[#333]">
          LoRaWAN® Gateway
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center text-center">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-32 h-32 object-cover"
                src={item.img}
                alt="not found"
              />
              <p className="mt-2 hover:cursor-pointer hover:text-[#0299f4] text-[#333]">
                {item.para1} <br /> {item.para2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GatewaySection;
