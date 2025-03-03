import React from "react";
import Start from "../components/company/about-us/Start";
import Profile from "../components/company/about-us/Profile";
import Sensing from "../components/company/about-us/Sensing";
import Technology from "../components/company/about-us/Technology";
import Quality from "../components/company/about-us/Quality";
import World from "../components/company/about-us/World";
import Growth from "../components/company/Growth";
import Ethics from "../components/company/about-us/Ethics";
import Superior from "../components/company/about-us/Superior";
import Cooperation from "../components/company/about-us/Cooperation";

const Company = () => {
  return (
    <div>
      <Start />
      <Profile />
      <Sensing />
      <Technology />
      <Quality />
      <World />
      <Growth/>
      <Ethics/>
      <Superior/>
      <Cooperation/>
    </div>
  );
};

export default Company;
