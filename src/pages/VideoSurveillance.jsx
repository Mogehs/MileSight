import Hero from "../components/products/iot-sensing/Hero";
import AiVideo from "../components/products/video-servillance/AiVideo";
import ContactUs from "../components/products/video-servillance/ContactUs";
import Explore from "../components/products/video-servillance/Explore";
import Innovation from "../components/products/video-servillance/Innovation";
import Integration from "../components/products/video-servillance/Integration";
import Solution from "../components/products/video-servillance/Solutions";
import Support from "../components/products/video-servillance/Support";
import Whatshot from "../components/products/video-servillance/Whatshot";



const VideoSurveillance = () => {
  return <div> 
    <Hero />
    <AiVideo />
    <Whatshot />
    <Innovation/>
    <Solution/>
    <Explore/>
    <Integration/>
    <Support/>
    <ContactUs/>
  </div>;
};

export default VideoSurveillance;
