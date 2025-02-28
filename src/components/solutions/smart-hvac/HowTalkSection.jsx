import React from "react";

const HowTalkSection = () => {
  return (
    <div
      className="h-[100vh] bg-center pt-12 bg-no-repeat bg-cover my-8 hover:cursor-pointer"
      style={{ backgroundImage: "url('/Solution/smart-hvac/talk-bg.jpg')" }}
    >
      <h3 className="md:text-[2rem] lg:text-[2.5rem] text-[25px] text-[#333] text-center">
        Talk to Experts and Get Start with Demo Kits
      </h3>
    </div>
  );
};

export default HowTalkSection;
