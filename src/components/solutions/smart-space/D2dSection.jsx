import React from "react";
import { RiBox3Line, RiSecurePaymentFill } from "react-icons/ri";
import { Bs1Square } from "react-icons/bs";
import { PiStepsFill } from "react-icons/pi";

function D2dSection() {
  return (
    <div className="p-4" id="smart-d2d">
      <div className="flex flex-col items-center gap-6 p-4">
        <h2 className="md:text-[1.5rem] text-[20px]">
          Empowered with Milesight D2D Communication
        </h2>
        <h3 className="md:text-[1rem] text-[15px] text-[#333]">
          Without a LoRaWAN® Gateway
        </h3>
        <p className="text-[#666] md:w-[82%] text-center">
          Milesight D2D (Device to Device) protocol featuring LoRa enables fast
          communication (within 1 second) among different Milesight LoRaWAN®
          node devices without a LoRaWAN® gateway.
        </p>
        <ul className=" flex md:flex-row flex-col gap-4 justify-center md:items-center">
          <li className="flex flex-col items-center gap-2">
            <div className="text-[2rem] ">
              <RiBox3Line className="text-[#333]" />
            </div>
            <div className="text-[#a5a2ad]">Lower Latency</div>
          </li>
          <li className="flex flex-col items-center gap-2 border-l border-l-[#666] pl-4">
            <div className="text-[2rem]">
              <Bs1Square className="text-[#333]" />
            </div>
            <div className="text-[#a5a2ad]">
              Less than 1 Second <br /> Response Time
            </div>
          </li>
          <li className="flex flex-col items-center gap-2 border-l border-l-[#666] pl-4">
            <div className="text-[2rem] ">
              <RiSecurePaymentFill className="text-[#333]" />
            </div>
            <div className="text-[#a5a2ad]">
              Secure <br /> Transmission
            </div>
          </li>
          <li className="flex flex-col items-center gap-2 border-l border-l-[#666] pl-4">
            <div className="text-[2rem]">
              <PiStepsFill className="text-[#333]" />
            </div>
            <div className="text-[#a5a2ad]">
              Reduce <br /> Investment Cost
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#f5f5f5] rounded-2xl py-16 px-8 flex md:flex-row flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-2 md:w-[15%]">
          <img
            className=""
            src="/Solution/smart-space/d2d-img1.png"
            alt="not found"
          />
          <p className="text-[#272829]">Controller</p>
        </div>
        <div className="flex flex-col items-center gap-2 md:w-[15%]">
          <p className="text-[#272829]">Milesight D2D</p>
          <div className="flex items-center">
            <img
              className="md:w-[25%]"
              src="/Solution/smart-space/d2d-img2.png"
              alt="not found"
            />
            <img
              className="md:w-[25%]"
              src="/Solution/smart-space/d2d-img2.png"
              alt="not found"
            />
            <img
              className="md:w-[25%]"
              src="/Solution/smart-space/d2d-img2.png"
              alt="not found"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:w-[15%]">
          <img
            className="md:w-[50%]"
            src="/Solution/smart-space/d2d-img3.png"
            alt="not found"
          />
          <p className="text-[#272829]">Agent</p>
        </div>
        <div className=" relative md:w-[15%] md:block hidden">
          <div className="flex flex-col gap-2 w-[15%]">
            <img
              className="absolute lg:bottom-20 lg:left-14 md:bottom-16 md:left-10 xl:bottom-22 xl:left-19 w-[15%]"
              src="/Solution/smart-space/d2d-img6.png"
              alt="not found"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              className="w-[20%]"
              src="/Solution/smart-space/d2d-img4.png"
              alt="not found"
            />
            <p className="text-[#272829]">Node Device</p>
          </div>
          <div className="flex flex-col gap-2 w-[15%]">
            <img
              className="w-[15%] absolute md:top-[2px] md:left-[43px] lg:top-1 lg:left-15 xl:top-1 xl:left-19 animate-spin "
              src="/Solution/smart-space/d2d-img5.png"
              alt="not found"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#0299f4] text-white py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default D2dSection;
