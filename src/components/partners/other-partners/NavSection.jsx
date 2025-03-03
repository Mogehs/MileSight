import React, { useState } from "react";
import Logos from "./Logos";

function NavSection() {
  const [activeComponent, setActiveComponent] = useState("video");

  const components = {
    video: <Logos />,
  };

  return (
    <div className="w-full overflow-hidden mt-15">
      {/* Navbar */}
      <div className="sticky top-0 bg-white z-10 w-full mx-auto">
        <div className="btns text-[#666] w-full flex flex-row justify-between items-center shadow-md border-b border-[#f5f5f5] py-2 px-4 sm:px-6 md:px-8">
          <div className="flex flex-row flex-wrap items-center gap-4 sm:gap-6 md:gap-8 w-full text-sm md:text-[15px] overflow-x-auto scrollbar-hide">
            {[
              { id: "video", label: "Video Surveillance" },
              { id: "models", label: "IoT" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveComponent(id)}
                className={`cursor-pointer px-3 sm:px-4 py-2 transition-colors duration-300 border-l border-l-[#dddddd] whitespace-nowrap ${
                  activeComponent === id
                    ? "bg-[#00667C] text-white font-semibold"
                    : "hover:text-[#7CCA9A] text-[#666]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render the Active Component */}
      <div className="p-4 sm:p-6 md:p-8">{components[activeComponent]}</div>
    </div>
  );
}

export default NavSection;
