import React from "react";
import ProgramOverview from "./ProgramOverview";
import EasyStep from "./EasyStep";
import Requirement from "./Requirement";
import SpecialBenefit from "./SpecialBenefit";
import Button from "./Button";

function IotSection() {
  return (
    <div>
      <ProgramOverview />
      <EasyStep />
      <Requirement />
      <SpecialBenefit />
      <Button text="Submit Your Project Registration Form Here" />
    </div>
  );
}

export default IotSection;
