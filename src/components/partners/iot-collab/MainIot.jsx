import FormSection from "../../ai-mini-dome/FormSection";
import DiscoverFea from "../../solutions/PeoplCounting/DiscoverFea";
import MergeIot from "./MergeIot";
import shake from '/IotCollaboration/shake.png'

function MainIot() {
  return <div>
          <DiscoverFea title="Collaboration Start Guide" description='Why and How to Start a Collaboration with Milesight' btn={"Contact for me"} bgimage={shake}/>

          <MergeIot/>

          <FormSection/>
  </div>;
}

export default MainIot;
