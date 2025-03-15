import React from "react";
import Hero from "../components/company/impact-award/Hero";
import Navbar from "../components/company/impact-award/Navbar";
import MakeMark from "../components/company/impact-award/MakeMark";
import MeetMilesight from "../components/company/impact-award/MeetMilesight";
import AwardCategory from "../components/company/impact-award/AwardCategory";
import Submit from "../components/company/impact-award/Submit";
import MoreWinner from "../components/company/impact-award/MoreWinner";
import AwardTimeline from "../components/company/impact-award/AwardTimeline";
import Faq from "../components/company/impact-award/Faq";

function ImpactAward() {
  return (
    <div>
      <Hero />
      <Navbar />
      <MakeMark />
      <MeetMilesight />
      <AwardCategory />
      <Submit />
      <MoreWinner />
      <AwardTimeline />
      <Faq />
    </div>
  );
}

export default ImpactAward;
