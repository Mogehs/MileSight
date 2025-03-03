import React from 'react';
import ethic from "/aboutimg/ethics.jpg";

const Ethics = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 flex  flex-col md:flex-row  gap-10 items-center bg-gray-100">
      
      {/* Image Section */}
      <div className="w-[100%] md:w-[70vw]">
        <img className="w-full rounded-sm sm:rounded-2xl" src={ethic} alt="Business Ethics" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-3/4 mt-6 lg:flex lg:flex-col md:gap-5 text-center md:text-left">
        <h1 className="text-3xl lg:text-5xl md:text-2xl font-semibold">
          Business Ethics and Social Responsibility Matter
        </h1>
        <p className="text-sm text-gray-600 mt-2 text-justify">
          As Milesight's tagline "Make Sensing Matter" implies, we are committed to growing on the premise of positively impacting our global community through sustainable practices, social stewardship, and ethical corporate governance. Whether it's promoting gender equality, ensuring decent work conditions, or fostering an open business ecosystem, we hold that our efforts ripple beyond organizational boundaries.
        </p>
        <p className="text-gray-600 mt-2">
          Download the report to learn about our ESG initiatives.
        </p>

        {/* Download Button */}
        <a href="#" className="mt-4 inline-block lg:w-fit px-6 py-2 bg-[#00667C] text-white font-bold rounded hover:bg-[#7CCA9A] transition">
          Download
        </a>
      </div>
    </div>
  );
};

export default Ethics;