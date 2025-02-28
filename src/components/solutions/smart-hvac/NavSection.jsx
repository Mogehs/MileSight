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
      const sections = ["hvac-why", "hvac-what", "hvac-how", "hvac-q&a"];

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
    <nav className="sticky top-0 z-50">
      <div className="hidden md:flex bg-white">
        <div className="btns text-[#666] w-full flex flex-row justify-between px-8 items-center shadow-2xs border-b-[#f5f5f5] py-4">
          <div className="flex flex-row items-center gap-8">
            {[
              { id: "hvac-why", label: "Why" },
              { id: "hvac-what", label: "What" },
              { id: "hvac-how", label: "How" },
              { id: "hvac-q&a", label: "Q&A" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer px-4 py-2 transition-colors duration-300 border-l border-l-[#dddddd] ${
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
            <button className="hover:text-[#0299f4] cursor-pointer">
              Home
            </button>
            <p className="text-[10px]">
              <FaGreaterThan />
            </p>
            <p>Solution</p>
            <p className="text-[10px]">
              <FaGreaterThan />
            </p>
            <p>Smart HVAC Management</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavSection;
