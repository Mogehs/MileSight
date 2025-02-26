import React from "react";

function Hero() {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-start md:pl-25 w-full"
      style={{
        backgroundImage: "url('/Solution/smart-restroom/hero-bg-img.jpg')",
      }}
    >
      <div className="text-white flex flex-col justify-center">
        <h1 className="md:text-[2.8rem] text-[25px]">Smart Restroom Solution</h1>
        <p className="md:text-[1.5rem] text-[15px]">Reshape Restroom, Release the Values of Smartness</p>
        <div className="hidden md:flex ml-6 mt-2 gap-8">
          <ul className="list-disc">
            <li>Upgraded Restroom Mode</li>
            <li>Diversified Sensors</li>
            <li>Real-time Monitoring</li>
          </ul>
          <ul className="list-disc">
            <li>Smart Display</li>
            <li>Optimal User Experience</li>
            <li>Intelligent Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
