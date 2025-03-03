import BenefitsPartner from "./BenefitsPartner";
import PartnerProgram from "./PartnerProgram";
import WhyMiles from "./WhyMiles";

const AllPartner = () => {
  return (
    <div className=" w-full">
      <PartnerProgram />
      <WhyMiles />
      <BenefitsPartner />
    </div>
  );
};

export default AllPartner;
