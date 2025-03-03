import React, { useState, useEffect, useRef } from "react";

function BenefitSection() {
  const [currentImage, setCurrentImage] = useState(
    "/Solution/smart-restroom/benefit-img.png"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const benefitListRef = useRef(null);

  // Image Mapping for Different Scroll Positions
  const images = {
    0: "/Solution/smart-restroom/benefit-img.png", // Default
    1: "/Solution/smart-restroom/benefit-img.png", // First Two li remain the same
    2: "/Solution/smart-restroom/benefit-img-2.png",
    3: "/Solution/smart-restroom/benefit-img-3.png",
    4: "/Solution/smart-restroom/benefit-img-4.png",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (benefitListRef.current) {
        const items = benefitListRef.current.children;
        let newIndex = activeIndex;

        // Detect which li is in focus based on scroll position
        for (let i = 0; i < items.length; i++) {
          const rect = items[i].getBoundingClientRect();
          if (rect.top >= 100 && rect.bottom <= window.innerHeight - 100) {
            newIndex = i;
            break;
          }
        }

        // Update active li and image
        setActiveIndex(newIndex);
        setCurrentImage(images[newIndex] || images[4]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Function to handle click event on list items
  const handleClick = (index) => {
    setActiveIndex(index);
    setCurrentImage(images[index] || images[4]);
  };

  return (
    <div
      id="smart-benefit"
      className="w-full relative bg-cover bg-center py-8"
      style={{
        backgroundImage: "url('/Solution/smart-restroom/benefit-bg-img.jpg')",
      }}
    >
      <div className="text-white flex flex-col gap-4 justify-center pt-8 items-center p-4">
        <h1 className="md:text-[3rem] text-[20px]">
          Fully Sense to Build A Smart Restroom
        </h1>
        <p className="md:px-12 px-2 text-[15px] md:text-center">
          The one-stop Smart Restroom Solution equipped with diverse sensors and
          devices eliminates all troubles to build a smart modern restroom. Who
          can turn down a clean, fully functional, manageable and safe restroom
          with a great user experience? With great compatibility, it can also be
          integrated with third-party devices and platforms to realize wider and
          more comprehensive applications.
        </p>
      </div>
      <div className="bg-white rounded-2xl flex md:flex-row flex-col items-center justify-center gap-8 py-8 px-16 mx-4">
        <div>
          <ul
            ref={benefitListRef}
            className="flex flex-col gap-12 list-disc text-[#828482]"
          >
            {[
              "Detect with AI, ToF, and PIR",
              "Smell to Get Rid of, Smell",
              "Tell Status Accurately",
              "Touch for help",
              "Connect for Smart Management",
            ].map((text, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-[#7CCA9A] font-bold scale-105"
                    : "text-[#00667C]"
                }`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="md:h-[549px] h-[150px] transition-opacity duration-500 ease-in-out opacity-0"
            src={currentImage}
            alt="not found"
            onLoad={(e) => e.target.classList.add("opacity-100")}
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
