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
        "smartCity-challenges",
        "smartCity-applications&products",
        "smartCity-benefit",
        "cellular-switch",
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
    <div className="sticky hidden md:flex top-18 bg-white z-10">
      <div className="btns text-[#666] w-full flex flex-row justify-between px-8 items-center shadow-2xs border-b-[#f5f5f5] py-4">
        <div className="flex flex-row items-center gap-8">
          {[
            { id: "smartCity-challenges", label: "Challengs" },
            { id: "smartCity-benefit", label: "Benefit" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer px-4 py-2 transition-colors duration-300 border-l border-l-[#dddddd] ${
                activeSection === id
                  ? "bg-[#00667C] text-white font-semibold"
                  : "hover:text-[#7CCA9A] text-[#666]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button className="hover:text-[#7CCA9A] cursor-pointer">Home</button>
          <p className="text-[8px]">
            <FaGreaterThan />
          </p>
          <p>Solution</p>
          <p className="text-[8px]">
            <FaGreaterThan />
          </p>
          <p>Smart City</p>
        </div>
      </div>
    </div>
  );
}

export default NavSection;
