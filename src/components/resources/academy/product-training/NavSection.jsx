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
        "resources-all",
        "resources-counting",
        "resources-energy",
        "resources-h2",
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
    <nav className="mt-4">
      <div className="flex bg-white">
        <div className="btns text-[#666] w-full flex flex-row justify-between px-8 items-center py-4">
          <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8">
            {[
              {
                id: "resources-all",
                label: "All",
              },
              {
                id: "resources-counting",
                label: "Occupancy & People Counting",
              },
              { id: "resources-energy", label: "Energy Saving" },
              { id: "resources-h2", label: "2023 H2 Roadmap" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer px-4 py-2 transition-colors duration-300 border rounded border-[#dddddd] ${
                  activeSection === id ? "" : "hover:text-[#0299f4] text-[#666]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavSection;
