import DiscoverFea from "../solutions/PeoplCounting/DiscoverFea";
import BecomePartner from "./BecomePartner";
import BenefitsPartner from "./BenefitsPartner";
import PartnerProgram from "./PartnerProgram";
import WhyMiles from "./WhyMiles";

const AllPartner = () => {
  return (
    <div className=" w-full">
      <div className=" text-md">
        <DiscoverFea
          bgimage={"/ChannelPartner/hand.png"}
          title={"Milesight Channel Partners"}
          description={"Sell and Grow, Together."}
        />
      </div>

      <BecomePartner />
      <PartnerProgram />
      <WhyMiles />
      <BenefitsPartner />
    </div>
  );
};

export default AllPartner;
