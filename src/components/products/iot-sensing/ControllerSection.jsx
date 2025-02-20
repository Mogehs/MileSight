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
];

function ControllerSection() {
  return (
    <div id="lorawan-controller" className="mt-4 p-4">
      <div className="p-4 bg-[#f1f7ff] rounded-3xl">
        {" "}
        <h2 className="md:text-[3rem] text-[25px] text-center text-[#333]">
          LoRaWAN® Controller
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center text-center">
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

export default ControllerSection;
