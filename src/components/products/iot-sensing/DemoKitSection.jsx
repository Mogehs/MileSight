import React from "react";
import ImageCarousel from "./ImageCarousel";
import Carousel from "./Carousel";

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

function DemoKitSection() {
  return (
    <div id="lorawan-demo-kit" className="mt-4 p-4">
      <div
        className="p-4 relative inset-0 bg-cover bg-center z-0 flex flex-col"
        style={{ backgroundImage: "url('/iot-sensing/demo-bg-img.jpg')" }}
      >
        {" "}
        <h2 className="md:text-[3rem] text-nowrap text-center text-[#fff]">
          Milesight LoRaWAN® Demo Kit
        </h2>
        <div className="flex justify-center my-20">
          <img
            className="md:w-[40rem]"
            src="/iot-sensing/demo-img.png"
            alt="not found"
          />
        </div>
        <div className=" bg-white rounded-3xl mt-4">
          <ImageCarousel data={data} />
          {/* <Carousel /> */}
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-12 w-full">
          <h2 className="md:text-[3rem] text-[25px] text-center text-[#333]">
            Milesight & Actility & Akenza <br /> Make LoRaWAN® Demo Kits
            Accessible for All
          </h2>
          <p className="text-center text-[#333]">
            Here comes the special version of LoRaWAN® demo kits, enabling
            convenient access fromThe Things Market <br /> and cloud management
            powered by Akenza.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-12">
          <img
            className="md:h-[1.8rem]"
            src="/iot-sensing/demo-icon-1.png"
            alt="not found"
          />
          <img
            className="md:h-[1.8rem]"
            src="/iot-sensing/demo-icon-2.png"
            alt="not found"
          />
          <img
            className="md:h-[1.8rem]"
            src="/iot-sensing/demo-icon-3.png"
            alt="not found"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-12">
          <img
            className="md:h-[14rem] w-fit"
            src="/iot-sensing/demo-img-1.png"
            alt="not found"
          />
          <img
            className="md:h-[14rem] w-fit"
            src="/iot-sensing/demo-img-2.png"
            alt="not found"
          />
          <img
            className="md:h-[14rem] w-fit"
            src="/iot-sensing/demo-img-3.png"
            alt="not found"
          />
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#0299f4] text-white py-1 px-6 rounded-xl cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoKitSection;
