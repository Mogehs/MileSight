import React, { useState } from "react";
import IotSection from "./IotSection";
import NavSection from "./NavSection";
import VideoSection from "./VideoSection";
import VideoNav from "./VideoNav";

function GroupSelect() {
  const [active, setActive] = useState("iot");
  return (
    <div className="my-8">
      <div className="text-white flex gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <img
            className={`rounded-full border border-[#c3c3c3] p-2 hover:cursor-pointer w-[6rem] h-[6rem] ${
              active === "iot" ? "bg-[#00667C] text-white" : ""
            }`}
            src="/resources/product-training/iot-img.svg"
            alt="not found"
            onClick={() => setActive("iot")}
          />
          <p
            className={`text-[#6b7274] ${
              active === "iot" ? "text-[#00667C]" : ""
            }`}
          >
            IoT Products
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img
            className={`border border-[#c3c3c3] rounded-full p-2 hover:cursor-pointer w-[6rem] h-[6rem] ${
              active === "video" ? "bg-[#00667C]" : ""
            }`}
            src="/resources/product-training/video-img.svg"
            alt="not found"
            onClick={() => setActive("video")}
          />
          <p
            className={`text-[#6b7274] ${
              active === "video" ? "text-[#00667C]" : ""
            }`}
          >
            Video Surveillance
          </p>
        </div>
      </div>
      <div className={`${active === "iot" ? "flex flex-col" : "hidden"}`}>
        <NavSection />
        <IotSection />
      </div>
      <div className={`${active === "video" ? "flex flex-col" : "hidden"}`}>
        <VideoNav />
        <VideoSection />
      </div>
    </div>
  );
}

export default GroupSelect;
