import React from "react";
import Start from "../components/company/about-us/Start";
import Profile from "../components/company/about-us/Profile";
import Sensing from "../components/company/about-us/Sensing";
import Technology from "../components/company/about-us/Technology";
import Quality from "../components/company/about-us/Quality";
import World from "../components/company/about-us/World";

const Company = () => {
  return (
    <div>
      <Start />
      <Profile />
      <Sensing />
      <Technology />
      <Quality />
      <World />
    </div>
  );
};

export default Company;
