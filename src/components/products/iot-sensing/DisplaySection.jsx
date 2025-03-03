import React from "react";
import ImageCarousel from "./ImageCarousel";

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
    img: "/iot-sensing/9-pic1.png",
    para1: "UG65",
    para2: "Indoor LoRaWAN® Gateway",
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
    img: "/iot-sensing/9-pic1.png",
    para1: "UG65",
    para2: "Indoor LoRaWAN® Gateway",
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

function DisplaySection() {
  return (
    <div id="iot-display" className="mt-4 p-4">
      <div className="p-4">
        {" "}
        <h2 className="md:text-[3rem] text-[25px] text-center text-[#333]">
          IoT Display
        </h2>
        <div className="flex flex-col items-center">
          <div className="mt-[-5rem]">
            <img src="/iot-sensing/2-pic1.png" alt="not found" />
          </div>
          <p className="hover:cursor-pointer text-center hover:text-[#7CCA9A] text-[#333]">
            DS3604
            <br />
            IoT E-ink Display
          </p>
        </div>
        <div className=" bg-[#f1f7ff] p-4 rounded-3xl mt-4">
          <h2 className="md:text-[3rem] text-[25px] text-center text-[#333]">
            Product Comparison Guide
          </h2>
          <p className="text-center text-[#333]">
            Which product is right for you?
          </p>
          <ImageCarousel data={data} />
        </div>
      </div>
    </div>
  );
}

export default DisplaySection;
