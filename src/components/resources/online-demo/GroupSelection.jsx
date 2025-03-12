import React, { useState } from "react";
import VideoSection from "./VideoSection";
import CloudSelection from "./CloudSection";
import GatewaySection from "./GatewaySection";
import RouterSection from "./RouterSection";

const options = [
  {
    id: "video",
    imgSrc: "/resources/product-training/video-img.svg",
    label: "Video Surveillance",
    component: <VideoSection />,
  },
  {
    id: "cloud",
    imgSrc: "/resources/online-demo/cloud.svg",
    label: "Milesight IoT Cloud",
    component: <CloudSelection />,
  },
  {
    id: "gateway",
    imgSrc: "/resources/online-demo/gateway.svg",
    label: "LoRaWAN® Gateway",
    component: <GatewaySection />,
  },
  {
    id: "router",
    imgSrc: "/resources/online-demo/router.svg",
    label: "5G/4G Router",
    component: <RouterSection />,
  },
];

function GroupSelection() {
  const [active, setActive] = useState("video");

  return (
    <div className="my-8">
      {/* Selection Options */}
      <div className="text-white flex md:gap-12 gap-2 items-center justify-center">
        {options.map(({ id, imgSrc, label }) => (
          <div
            key={id}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              className={`border border-[#c3c3c3] rounded-full p-2 hover:cursor-pointer md:w-[6rem] md:h-[6rem] w-12 h-12 transition ${
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

      {/* Dynamic Section Rendering */}
      <div>{options.find((option) => option.id === active)?.component}</div>
    </div>
  );
}

export default GroupSelection;
