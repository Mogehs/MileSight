import React from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div>
      {/* 4 Columns */}
      <div className="flex justify-center items-center gap-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <ul className="space-y-5">
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Video Surveillance
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Smart Restroom
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Smart Space
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Smart Agriculture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-5">
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4] text-nowrap"
                >
                  Intelligent Traffic Solution
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Indoor Air Quality
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  People Counting
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Space Occupancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-5">
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Smart Building
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Energy Efficiency
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Smart City
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black text-[14px] sm:text-[16px] font-base hover:text-[#0299f4]"
                >
                  Waste Management
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
