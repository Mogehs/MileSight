import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import FeatureSection from "./FeatureSection";
import Models from "./Models";
import Accessories from "./Accessories";
import Downloads from "./Downloads";

function NavSection({ modelData }) {
  const [activeComponent, setActiveComponent] = useState("features");

  const components = {
    features: <FeatureSection modelData={modelData} />,
    models: <Models />,
    accessories: <Accessories />,
    download: <Downloads />,
  };

  return (
    <div>
      {/* Navbar */}
      <div className="sticky flex top-16 bg-white z-10">
        <div className="btns text-[#666] w-full flex flex-row justify-between px-8 items-center shadow-2xs border-b-[#f5f5f5] py-4">
          <div className="flex flex-row flex-wrap items-center gap-8 w-full text-sm md:text-[15px]">
            {[
              { id: "features", label: "FEATURES" },
              { id: "models", label: "MODELS" },
              { id: "accessories", label: "ACCESSORIES" },
              { id: "download", label: "DOWNLOAD" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveComponent(id)}
                className={`cursor-pointer px-4 py-2 transition-colors duration-300 border-l border-l-[#dddddd] ${
                  activeComponent === id
                    ? "bg-[#00667C] text-white font-semibold"
                    : "hover:text-[#7CCA9A] text-[#666]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button className="hover:text-[#0299f4] cursor-pointer">
              Home
            </button>
            <p className="text-[10px]">
              <FaGreaterThan />
            </p>
            <p className="text-nowrap">Mini Series</p>
            <p className="text-[10px]">
              <FaGreaterThan />
            </p>
            <p className="text-nowrap">AI Motorized Dome Camera</p>
          </div>
        </div>
      </div>

      {/* Render the Active Component */}
      <div className="p-8">{components[activeComponent]}</div>
    </div>
  );
}

export default NavSection;
