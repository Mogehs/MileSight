import React from "react";

const BackgroundSection = () => {
  return (
    <>
    <div className="relative bg-cover bg-center text-black py-16 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-semibold">Learn, Build, and Connect</h2>
        </div>
    <div
      className="relative bg-cover bg-center text-white mx-10 rounded-md py-16 px-6 flex flex-col items-center"
      style={{ backgroundImage: "url('/DeveloperZone/bea-12.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl font-semibold text-[#333]">Developer Reference</h2>
        <p className="mt-4 text-lg text-[#666]">
          Explore our resources to build your projects confidently.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white rounded-md p-6 shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Beaver IoT</h3>
          <h4 className="mt-4 text-lg text-[#0299F4] underline">User Guide </h4>
          <h4 className="text-lg text-[#0299F4] underline">Dev Guide</h4>
          <button className="mt-6 bg-[#0299f4] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-md p-6 shadow-lg text-center">
          <h3 className="text-2xl font-semibold">Milesight Development Platform:</h3>
          <h4 className="mt-4 text-lg text-[#0299F4] underline">Document Center </h4>
          <h4 className="text-lg text-[#0299F4] underline">API Reference</h4>
          <h4 className="text-lg text-[#0299F4] underline">Supported Device List</h4>
          <button className="mt-6 bg-[#0299f4] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BackgroundSection;
