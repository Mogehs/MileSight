import React, { useState } from "react";
import CitySection from "./CitySection";
import BuildingSection from "./BuildingSection";

function GroupSelect() {
  const [active, setActive] = useState("building");
  return (
    <div className="my-8">
      <div className="text-white flex gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <img
            className={`rounded-full border border-[#c3c3c3] p-2 hover:cursor-pointer w-[6rem] h-[6rem] ${
              active === "building" ? "bg-[#00667C] text-white" : ""
            }`}
            src="/resources/solution-training/first-group.svg"
            alt="not found"
            onClick={() => setActive("building")}
          />
          <p
            className={`text-[#6b7274] ${
              active === "building" ? "text-[#00667C]" : ""
            }`}
          >
            Smart Building
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img
            className={`border border-[#c3c3c3] rounded-full p-2 hover:cursor-pointer w-[6rem] h-[6rem] ${
              active === "city" ? "bg-[#00667C]" : ""
            }`}
            src="/resources/solution-training/second-group.svg"
            alt="not found"
            onClick={() => setActive("city")}
          />
          <p
            className={`text-[#00667C] ${
              active === "city" ? "text-[#7CCA9A]" : ""
            }`}
          >
            Smart City
          </p>
        </div>
      </div>
      {active === "building" && <BuildingSection />}
      {active === "city" && <CitySection />}
    </div>
  );
}

export default GroupSelect;
