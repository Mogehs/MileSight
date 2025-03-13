import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import IotSection from "./IotSection";
import VideoSection from "./VideoSection";

const options = [
  {
    id: "IoT",
    imgSrc: "/resources/product-training/iot-img.svg",
    label: "IoT",
    component: <IotSection />,
  },
  {
    id: "video",
    imgSrc: "/resources/product-training/video-img.svg",
    label: "Video Surveillance",
    component: <VideoSection />,
  },
];

function Navbar() {
  const [active, setActive] = useState("IoT");

  return (
    <div className="my-8 p-4">
      {/* Selection Options */}
      <div className="bg-[#fff] border-b border-[#f2f2f2] shadow-lg mb-4  text-white flex md:gap-12 gap-2 items-center justify-between p-4">
        <div className="flex gap-4 items-center justify-center">
          {options.map(({ id, imgSrc, label }) => (
            <div key={id} className="flex gap-2 items-center justify-center">
              <img
                className={`border border-[#c3c3c3] rounded-full p-2 hover:cursor-pointer md:w-[4rem] md:h-[4rem] w-12 h-12 transition ${
                  active === id ? "bg-[#00667C]" : ""
                }`}
                src={imgSrc}
                alt={label}
                onClick={() => setActive(id)}
              />
              <p
                className={`text-[#6b7274] transition text-[10px] md:text-[15px] text-center ${
                  active === id ? "text-[#00667C] font-semibold" : ""
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#fff] text-[#666] hidden md:flex items-center justify-end md:gap-2 gap-0.5 md:p-4 p-2">
          <p className="hover:cursor-pointer">Home</p>
          <FaGreaterThan className="text-[10px]" />
          <p className="hover:cursor-pointer">Partner</p>
          <FaGreaterThan className="text-[10px]" />
          <p className="hover:cursor-pointer">Partner Ecosystem</p>
        </div>
      </div>

      {/* Dynamic Section Rendering */}
      <div>{options.find((option) => option.id === active)?.component}</div>
    </div>
  );
}

export default Navbar;
