import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex flex-col gap-16 mb-8">
      <div className="bg-[#fff] border-b border-[#f2f2f2] shadow-lg mb-4 text-[#666] flex items-center justify-end md:gap-2 gap-0.5 md:p-4 p-2">
        <p className="hover:cursor-pointer">Home</p>
        <FaGreaterThan className="text-[10px]" />
        <p className="hover:cursor-pointer">Partner</p>
        <FaGreaterThan className="text-[10px]" />
        <p className="hover:cursor-pointer text-nowrap">Technology Partner Program</p>
      </div>
      <div>
        <p className="text-[#666] md:text-center md:px-16 p-4">
          The Milesight Technology Partner Program aims at advancing technical
          compatibility and maximizing business influence. By integrating our
          products with the unique strengths of our diverse partners, we strive
          to explore the possibilities of what can be achieved with Milesight
          products, providing end customers with more sophisticated and
          optimized solutions. Together, we can harness the power of partnership
          to achieve greater innovation and make the most significant sensing
          impact in the industry.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
