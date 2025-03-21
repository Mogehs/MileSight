import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import FloatingIcons from "../../components/products/5g-cellular/FloatingIcons";

function FeatureSection({ modelData }) {
  return (
    <div id="dome-features">
      <FloatingIcons />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 modelData={modelData} />
      <Section7 modelData={modelData} />
      <Section8 modelData={modelData} />
      <Section9 modelData={modelData} />
      <Section10 />
      <Section11 />
      <Section12 />
    </div>
  );
}

export default FeatureSection;
