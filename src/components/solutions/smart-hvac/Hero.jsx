import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Centralized", "Less Development Costs", "Energy-saving"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, 100); // Speed of typing
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, 50); // Speed of erasing
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length); // Next word
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <div
      className="h-[100vh] bg-no-repeat bg-cover bg-center p-4 flex flex-col gap-6 justify-center items-start"
      style={{ backgroundImage: "url('/Solution/smart-hvac/hvac-hero.jpg')" }}
    >
      <div className="md:w-[35%] flex flex-col gap-4 mt-4">
        <h2 className="md:text-[2rem] text-[25px]">
          Advanced HVAC Management with IoT Solutions to Optimize Energy
          Efficiency
        </h2>
        <p className="md:text-[1.2rem] text-[15px] text-[#666]">
          We Make HVAC System{" "}
          <motion.span
            className="text-[#0299f4]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
          </motion.span>
          <span className="text-[#0299f4]">|</span>
        </p>
      </div>
      <div>
        <img
          className="w-120"
          src="/Solution/smart-hvac/hvac-hero2.png"
          alt="not found"
        />
      </div>
    </div>
  );
}

export default Hero;
