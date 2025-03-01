import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import FloatingIcons from "../../../products/5g-cellular/FloatingIcons";

function Navbar() {
  return (
    <div className="bg-[#fff] border-b border-[#f2f2f2] shadow-lg mb-4 text-[#666] flex items-center justify-end md:gap-2 gap-0.5 md:p-4 p-4">
      <FloatingIcons />
      <p className="hover:cursor-pointer">Home</p>
      <FaGreaterThan className="text-[10px]" />
      <p className="hover:cursor-pointer">Resources</p>
      <FaGreaterThan className="text-[10px]" />
      <p className="hover:cursor-pointer">Academy</p>
      <FaGreaterThan className="text-[10px]" />
      <p className="hover:cursor-pointer text-nowrap">Solution Training</p>
    </div>
  );
}

export default Navbar;
