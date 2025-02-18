import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Column 1 */}
      <div>
        <Link
          to=""
          className="text-sm uppercase font-semibold tracking-wide hover:text-[#0299f4]"
        >
          Support
        </Link>
        <div className="mt-3 space-y-2">
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Submit a Ticket
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Help Center
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Online Demo
          </Link>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <Link
          to=""
          className="text-sm uppercase font-semibold tracking-wide hover:text-[#0299f4]"
        >
          Academy
        </Link>
        <div className="mt-3 space-y-2">
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Product Training
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Solution Training
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Technical Training
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Roadmap
          </Link>
        </div>
      </div>

      {/* Column 3 */}
      <div>
        <Link
          to=""
          className="text-sm uppercase font-semibold tracking-wide hover:text-[#0299f4]"
        >
          Video Center
        </Link>
        <div className="mt-3 space-y-2">
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Products
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Solutions
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Technology Innovations
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Tutorials
          </Link>
        </div>
      </div>

      {/* Column 4 */}
      <div>
        <Link
          to=""
          className="text-sm uppercase font-semibold tracking-wide hover:text-[#0299f4]"
        >
          Download Center
        </Link>
        <div className="mt-3 space-y-2">
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Datasheet & User Guide
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Software & Firmware
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Release Note
          </Link>
          <Link to="" className="block hover:text-[#0299f4] text-sm">
            Developer Zone
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
