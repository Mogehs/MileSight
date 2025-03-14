import React from "react";

const LastHero = () => {
  return (
    <div
      className="relative flex items-center justify-center mt-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[250px] mx-auto max-w-6xl rounded-md bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/company/blog/lsbg.png')" }}
    >
     {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-8 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Subscribe to our Newsletter
        </h1>
        <p className="text-[14px] sm:text-[15px] mb-6">
          Sign up for email updates on Milesight's new product announcements, software updates, and special offers.
        </p>
        <button className="bg-[#469BFF] text-white hover:bg-blue-600 px-6 sm:px-8 py-2 rounded-md text-sm sm:text-lg shadow-md transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default LastHero;
