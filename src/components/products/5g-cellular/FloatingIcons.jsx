import React, { useState, useEffect } from "react";
import { FaSkype, FaWhatsapp, FaChevronUp } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import { BiSolidMessage } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";

function FloatingIcons() {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");

      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowIcons(heroBottom <= 0); // Show icons when hero section is out of view
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Icons */}
      <div
        className={`fixed-icons bg-[#E8EDF3] flex flex-col w-fit py-4 px-2 gap-8 border border-white rounded-sm fixed right-0 top-20 z-50 transition-opacity duration-300 ${
          showIcons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FaSkype className="text-[#0091d2] text-[2rem] hover:cursor-pointer" />
        <FaWhatsapp className="text-[#30ba45] text-[2rem] hover:cursor-pointer" />
        <BsWechat className="text-[#21d76d] text-[2rem] hover:cursor-pointer" />
        <BiSolidMessage className="text-[#5080d3] text-[2rem] hover:cursor-pointer" />
        <FaChevronUp
          onClick={scrollToTop}
          className="text-[#676767] text-[2rem] hover:cursor-pointer"
        />
      </div>

      {/* Chat Icon */}
      <LuMessageCircleMore
        size={70}
        className={`chatIcon bg-[#0080f7] text-white rounded-full hover:cursor-pointer p-4 fixed md:bottom-20 bottom-10 md:right-20 right-10 z-50 transition-opacity duration-300 `}
      />
    </>
  );
}

export default FloatingIcons;
