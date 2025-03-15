import React from "react";
import Hero from "../components/company/company-news/Hero";
import Navbar from "../components/company/company-news/Navbar";
import NavoPages from "../components/company/company-news/NavoPages";
import Year2025 from "../components/company/company-news/NewsNavbar/Year2025";

function CompanyNews() {
  return (
    <div>
      <Hero />
      <Navbar />
      <Year2025/>
    </div>
  );
}

export default CompanyNews;
