import React from "react";
import DiscoverFea from "../../solutions/PeoplCounting/DiscoverFea";
import NavSection from "./NavSection";
import FormSection from "../../ai-mini-dome/FormSection";

const OtherPartners = () => {
  return (
    <div className="w-full">
      <div className=" text-md">
        <DiscoverFea
          bgimage={"/ChannelPartner/hand.png"}
          title={"Milesight Channel Partners"}
          description={"Sell and Grow, Together."}
        />
      </div>
      <div className="  w-full flex gap-2 mx-auto md:w-11/12 justify-start md:justify-end text-gray-600 ">
        <span className=" cursor-pointer hover:text-blue-500">Home</span>
        <span className=" cursor-pointer hover:text-blue-500">Partner</span>
        <span className=" cursor-pointer hover:text-blue-500">
          Find a Channel Partner
        </span>
      </div>

      <div className=" mx-auto md:w-9/12 text-center mt-2 md:mt-6 text-md font-medium w-full">
        <p>
          Milesight works closely with a select group of authorized distributors
          to embark on new avenues of growth around the world. Build upon our
          partners industry resources and regional presence to offer the
          integrated solutions customers need. Together with our partners, we
          have experience and specialist knowledge from all industries and
          solution areas.
        </p>
      </div>
      <NavSection />
      <FormSection />
    </div>
  );
};

export default OtherPartners;
