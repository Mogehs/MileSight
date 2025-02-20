import React, { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa6";

function NavSection() {
  const [activeSection, setActiveSection] = useState(null);

  // Function to handle scrolling to the section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id); // Update the active section
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "lorawan-sensor",
        "lorawan-gateway",
        "lorawan-controller",
        "iot-display",
        "lorawan-demo-kit",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky hidden md:flex top-0 bg-white z-10">
      <div className="btns text-[#666] flex justify-between items-center shadow-2xs py-8">
        <div className="flex flex-row items-center gap-8">
          {[
            { id: "lorawan-sensor", label: "LoRaWAN® Sensor" },
            { id: "lorawan-gateway", label: "LoRaWAN® Gateway" },
            { id: "lorawan-controller", label: "LoRaWAN® Controller" },
            { id: "iot-display", label: "IoT Display" },
            { id: "lorawan-demo-kit", label: "LoRaWAN® Demo Kit" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer px-4 py-2 transition-colors duration-300 ${
                activeSection === id
                  ? "bg-[#0299f4] text-white font-semibold"
                  : "hover:text-[#0299f4] text-[#666]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:text-[#0299f4] cursor-pointer">Home</button>
          <p className="text-[10px]">
            <FaGreaterThan />
          </p>
          <p>IoT LoRaWAN® Series</p>
        </div>
      </div>
    </div>
  );
}

export default NavSection;
