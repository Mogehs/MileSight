import React from "react";
import Hero from "../components/company/company-blog/Hero";
import Corusel from "../components/company/company-blog/Corusel";
import CardFilter from "../components/company/company-blog/CardFilter";
import LastHero from "../components/company/company-blog/LastHero";

function CompanyBlog() {
  return (
    <div>
      <Hero />
      <Corusel />
      <CardFilter />
      <LastHero />
    </div>
  );
}

export default CompanyBlog;
