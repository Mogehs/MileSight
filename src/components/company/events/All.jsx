import React from "react";

let blogs = [1, 2, 4, 5, 6, 7, 7];

const All = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10">
        {blogs.map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[16rem] md:w-[18rem] lg:w-[14rem]"
          >
            <img
              src="/company/events/milesight-events-bg-intersec-dubai.png"
              alt="Intersec Dubai"
              className="rounded-lg w-full object-cover"
            />
            <div className="text-[0.8rem] py-2">
              <h1 className="font-semibold">Intersec Dubai</h1>
              <p>
                📅 Jan. 14 - 16 , UAE 🇦🇪 <br />
                📍 Dubai World Trade Centre - SA-H24
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
