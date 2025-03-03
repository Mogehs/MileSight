import React from "react";
import NavSection from "./NavSection";
import FormSection from "../../ai-mini-dome/FormSection";

const Events = () => {
  return (
    <div>
      <div className="relative h-[10rem] sm:h-[28rem] flex justify-center">
        <h1 className="absolute font-semibold text-lg sm:text-4xl top-10 z-10 px-2">
          Milesight Upcoming Events & Exhibitions
        </h1>
        <img
          src="/company/events/banner.png"
          alt=""
          className="absolute top-0"
        />
      </div>
      <NavSection />
      <FormSection />
    </div>
  );
};

export default Events;
