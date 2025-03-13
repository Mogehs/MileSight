import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="bg-[#fff] border-b border-[#f2f2f2] shadow-lg mb-4 text-[#666] flex items-center justify-end md:gap-2 gap-0.5 md:p-4 p-2">
      <p className="hover:cursor-pointer">Home</p>
      <FaGreaterThan className="text-[10px]" />
      <p className="hover:cursor-pointer">Partner</p>
      <FaGreaterThan className="text-[10px]" />
      <p className="hover:cursor-pointer">Find a Technology Partner</p>
    </div>
  );
}

export default Navbar;
