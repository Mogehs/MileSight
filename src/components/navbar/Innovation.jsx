import React from "react";
import { Link } from "react-router-dom";

const Innovation = () => {
  return (
    <div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {/* Column 1 */}
        <div>
          <ul className="space-y-4">
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                Milesight D2D
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                LoRaWAN®
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                5G
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-4">
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                AIoT
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                AI VCA
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                Image Processing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-4">
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                Heat Map
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-black text-[15px] font-base hover:text-[#0299f4] whitespace-nowrap"
              >
                Structure Design
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
