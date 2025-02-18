import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="absolute left-0 w-full text-black shadow-lg bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap md:flex-nowrap justify-start gap-12">
        {/* Column 1 */}
        <div className="w-full md:w-1/2">
          <Link to="" className="text-xl font-semibold mb-4 block">
            Milesight Partner Ecosystem
          </Link>
          <ul className="mt-2 space-y-2">
            {[
              "Find a Technology Partner",
              "Technology Partner Program",
              "Find a Channel Partner",
              "Channel Partner Program",
              "Project Registration",
              "IoT Collaboration Start Guide",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to=""
                  className="block hover:text-[#0299f4] text-sm md:text-base font-medium transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2">
          <Link to="" className="text-xl font-semibold mb-4 block">
            Developer Zone
          </Link>
          <ul className="mt-2 space-y-2">
            {[
              "Developer Resource Hub",
              "Open Source",
              "Join the Community",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to=""
                  className="block hover:text-[#0299f4] text-sm md:text-base font-medium transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
