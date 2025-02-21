import React from "react";

function SwitchSection() {
  return (
    <div
      id="cellular-switch"
      className="relative bg-cover bg-center mt-8 p-4 mx-4"
      style={{ backgroundImage: "url('/5g-cellular/router-bg-img.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-4xl text-[25px] font-bold">PoE Switch</h1>
        <p className="text-[#666] text-[15px] mt-2">Simplify Network Deployment with PoE</p>
      </div>
      <div
        className="relative p-6 flex flex-col items-center"
        style={{
          backgroundImage: "url(/5g-cellular/5g-bg-img.png)",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Product Image */}
        <img
          src="/5g-cellular/switch-img.png"
          alt="Product"
          className="w-40 h-40 object-contain mb-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 hover:cursor-pointer"
        />
        {/* Product Titles */}
        <p className="text-gray-600 transition delay-150 duration-300 ease-in-out hover:text-[#469bff] hover:cursor-pointer">
          4G IoT Controller UC300
        </p>
        <p className="text-gray-600 transition delay-150 duration-300 ease-in-out hover:text-[#469bff] hover:cursor-pointer">
          Rich Industrial Interfaces
        </p>
      </div>
    </div>
  );
}

export default SwitchSection;
