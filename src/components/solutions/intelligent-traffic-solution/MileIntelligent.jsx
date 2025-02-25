import FormSection from "../../products/iot-sensing/FormSection";
import AiPowered from "./AiPowered";
import Better from "./Better";
import Diverse from "./Diverse";
import DownloadPdf from "./DownloadPdf";
import Enhanced from "./Enhanced";
import Gobeyond from "./Gobeyond";
import OutStandingFea from "./OutStandingFea";
import RoadEntPar from "./RoadEntPar";
import VideoFuture from "./VideoFuture";


const MileIntelligent = () => {
  return <div>
      <Gobeyond/>
      <RoadEntPar/>
      <Better/>
      <OutStandingFea/>
      <AiPowered/>
      <Diverse/>
      <Enhanced/>
      <VideoFuture/>
      <DownloadPdf/>
      <h1 className=" mt-5 text-center sm:text-4xl text-2xl font-semibold">Contact Us Today to Discuss Your Needs!</h1>
      <FormSection/>
  </div>;
};

export default MileIntelligent;
