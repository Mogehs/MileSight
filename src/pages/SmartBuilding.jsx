import Challenges from "../components/solutions/smart-building/Challenges";
import ConventionalBuildings from "../components/solutions/smart-building/ConventionalBuildings";
import ExploringSmartBuilding from "../components/solutions/smart-building/ExploringSmartBuilding";
import IBox from "../components/solutions/smart-building/IBox";
import SmartBuild from "../components/solutions/smart-building/SmartBuild";
import SmartBuildingsSet from "../components/solutions/smart-building/SmartBuildingsSet";
import SuccessStory from "../components/solutions/smart-building/SuccessStory";
import FormSection from "../components/solutions/smart-restroom/FormSection";

const SmartBuilding = () => {
  return (
    <div>
      <SmartBuild />
      <Challenges />
      <ConventionalBuildings />
      <SmartBuildingsSet />
      <ExploringSmartBuilding />
      <SuccessStory />
      <IBox />
      <FormSection />
    </div>
  );
};

export default SmartBuilding;
