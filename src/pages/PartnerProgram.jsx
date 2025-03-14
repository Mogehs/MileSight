import BenefitTech from "../components/partners/partner-program/BenefitTech";
import CollaborationNews from "../components/partners/partner-program/CollaborationNews";
import CtaMiles from "../components/partners/partner-program/CtaMiles.jsx";
import { HearCrausel } from "../components/partners/partner-program/HearCrausel.jsx";
import Hero from "../components/partners/partner-program/Hero";
import Navbar from "../components/partners/partner-program/Navbar";



function PartnerProgram() {
  return (
    <div>
      <Hero />
      <Navbar />
      <BenefitTech/>
      <CollaborationNews/>
      <HearCrausel/>
      <CtaMiles/>
    </div>
  );
}

export default PartnerProgram;
