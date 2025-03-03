import React from "react";

const Start = () => {
  return (
    <div
      className="relative h-[20rem] sm:h-[25rem] flex items-center justify-start bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/DownloadCenter/start.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-30"></div>

      {/* Hero Content */}
      <div className="relative text-white px-8 flex flex-col justify-center gap-4 md:items-start items-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold">Download Center</h1>
        <p className="text-xl md:text-xl font-light text-white">
          Access all the software, firmware, and documentation resources you
          need from the Milesight Download Center.
        </p>
      </div>
    </div>
  );
};

export default Start;
