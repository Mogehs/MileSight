import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="relative h-screen flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/5g-cellular/hero-img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative text-center text-white px-6 flex flex-col justify-center md:gap-4 gap-2 md:items-start items-center overflow-hidden">
        <h1 className="text-[1.5rem] text-black md:text-[3.5rem]">
          5G & Cellular Products
        </h1>
        <p className="text-lg md:text-xl mt-4 text-[#666]">
          Connect Beyond Limits with Cutting-Edge Cellular Technology
        </p>
        <p className="text-[#666] bg-[#e0ebf4] border border-white rounded-[5px] text-nowrap md:py-2 md:px-6 p-2 w-fit">
          Explore All Accessories:{" "}
          <Link to={"#"} className="underline hover:text-[#469bff]">
            IoT
          </Link>{" "}
          &{" "}
          <Link to={"#"} className="underline hover:text-[#469bff]">
            Security
          </Link>
        </p>
      </div>

      {/* Animated Image (Coming from Bottom) */}
      <motion.img
        src="/5g-cellular/hero-img-2.png" // Replace with your image path
        alt="Animated 5G Device"
        className="absolute bottom-20 left-[200px] sm:bottom-30 sm:left-[350px] md:left-[550px] md:bottom-20 lg:left-[750px] lg:bottom-30 xl:left-[950px] xl:bottom-40 2xl:left-[1000px] 2xl:bottom-60 transform -translate-x-1/2 w-[10rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] 2xl:w-xl"
        initial={{ y: 200, opacity: 0 }} // Start off-screen (bottom)
        animate={{ y: 0, opacity: 1 }} // Move to center
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
      />
    </div>
  );
};

export default Hero;
