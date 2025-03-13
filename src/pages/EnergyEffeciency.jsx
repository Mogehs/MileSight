import FormSection from "../components/ai-mini-dome/FormSection";
import Innovation from "../components/home/Innovation";
import EnEffeciency from "../components/solutions/energy-effecieny/EnEffeciency";
import Section1 from "../components/solutions/energy-effecieny/Section1";
import Section2 from "../components/solutions/energy-effecieny/Section2";
import Section3 from "../components/solutions/energy-effecieny/Section3";
import Section4 from "../components/solutions/energy-effecieny/Section4";

const EnergyEffeciency = () => {
  return (
    <div>
      <EnEffeciency />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Innovation />
      <FormSection />
    </div>
  );
};

export default EnergyEffeciency;
