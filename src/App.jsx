import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IoTSensing from "./pages/IoTSensing";
import VideoSurveillance from "./pages/VideoSurveillance";
import IntelligentTraffic from "./pages/IntelligentTraffic";
import FiveGCellular from "./pages/FiveGCellular";
import SoftwarePlatform from "./pages/SoftwarePlatform";
import CoCreatedProgram from "./pages/CoCreatedProgram";
import IntelligentTrafficSoluiton from "./pages/IntelligentTrafficSoluiton";
import SmartRestroom from "./pages/SmartRestroom";
import SmartBuilding from "./pages/SmartBuilding";
import EnergyEffeciency from "./pages/EnergyEffeciency";
import IndoorAirQuality from "./pages/IndoorAirQuality";
import { MenuProvider } from "./components/menueContext";
import SmartSpace from "./pages/SmartSpace";
import SmartHVAC from "./pages/SmartHVAC";
import AiMiniDome from "./pages/product-details/AiMiniDome";
import MotorCamera from "./pages/product-details/MotorCamera";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import SmartCity from "./pages/SmartCity";
import OurBrand from "./pages/OurBrand";
import WasteManagement from "./pages/WasteManagement";
import DownloadCenter from "./pages/DownloadCenter";
import DeveloperZone from "./pages/DeveloperZone";
import ProductTraining from "./pages/ProductTraining";
import SolutionTraining from "./pages/SolutionTraining";
import PeopleCounting from "./pages/PeopleCounting";
import SpaceOccupancy from "./pages/SpaceOccupancy";
import Events from "./components/company/events/Events";
import NDAAProducts from "./pages/NDAAProducts";
import Partners from "./pages/Partners";
import PartnersOther from "./pages/PartnersOther";
import Security from "./pages/Security";
import OnlineDemo from "./pages/OnlineDemo";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

import ProjectRegistration from "./pages/ProjectRegistration";
import IotCollab from "./pages/IotCollab";
import TechnoPartner from "./pages/TechnoPartner";
import PartnerProgram from "./pages/PartnerProgram";
import CompanyBlog from "./pages/CompanyBlog";
import CompanyNews from "./pages/CompanyNews";

import VideoCenter from "./pages/VideoCenter";
import SmartAgriculture from "./pages/SmartAgriculture";
import ImpactAward from "./pages/ImpactAward";
import CompanyNewsletter from "./pages/CompanyNewsletter";

const MainLayout = () => (
  <div className="w-full max-w-[1536px] mx-auto">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/iot-sensing", element: <IoTSensing /> },
      { path: "/products/video-surveillance", element: <VideoSurveillance /> },
      {
        path: "/products/intelligent-traffic",
        element: <IntelligentTraffic />,
      },
      { path: "/products/5g-cellular", element: <FiveGCellular /> },
      { path: "/products/software-platform", element: <SoftwarePlatform /> },
      { path: "/products/co-created", element: <CoCreatedProgram /> },
      {
        path: "/products/detail",
        element: <AiMiniDome />,
      },
      {
        path: "/products/ai-vandal-proof-motorized-mini-bullet-camera",
        element: <MotorCamera />,
      },
      {
        path: "/solutions/intelligent-traffic-solution",
        element: <IntelligentTrafficSoluiton />,
      },
      {
        path: "/solutions/indoor-air-quality-monitoring",
        element: <IndoorAirQuality />,
      },
      {
        path: "/solutions/people-counting",
        element: <PeopleCounting />,
      },
      {
        path: "solutions/smart-space-occupancy",
        element: <SpaceOccupancy />,
      },
      {
        path: "/solutions/smart-building",
        element: <SmartBuilding />,
      },
      {
        path: "/solutions/energy-efficiency",
        element: <EnergyEffeciency />,
      },
      {
        path: "/solutions/smart-restroom",
        element: <SmartRestroom />,
      },
      {
        path: "/solutions/smart-space",
        element: <SmartSpace />,
      },
      {
        path: "/solutions/smart-city",
        element: <SmartCity />,
      },
      {
        path: "/solutions/smart-hvac",
        element: <SmartHVAC />,
      },
      {
        path: "/solutions/waste-management",
        element: <WasteManagement />,
      },
      {
        path: "/solution/smart-agriculture",
        element: <SmartAgriculture />,
      },

      {
        path: "/company/about-us",
        element: <Company />,
      },
      {
        path: "/company/impact-awards",
        element: <ImpactAward />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/company/our-brand",
        element: <OurBrand />,
      },

      {
        path: "/resources/download-center",
        element: <DownloadCenter />,
      },
      {
        path: "/resources/video-center",
        element: <VideoCenter />,
      },
      {
        path: "/resources/developer-zone",
        element: <DeveloperZone />,
      },
      {
        path: "/resources/academy/product-training",
        element: <ProductTraining />,
      },
      {
        path: "/resources/academy/solution-training",
        element: <SolutionTraining />,
      },
      {
        path: "/company/events",
        element: <Events />,
      },
      {
        path: "/products/NDAA-Compilant",
        element: <NDAAProducts />,
      },
      {
        path: "/solutions/find-technology-partner",
        element: <Partners />,
      },

      {
        path: "/partner/project",
        element: <ProjectRegistration />,
      },
      {
        path: "/partner/iot-collaboration-start-guide",
        element: <IotCollab />,
      },
      {
        path: "/partner/find-technology-partner",
        element: <TechnoPartner />,
      },
      {
        path: "/partner/technology-partner-program",
        element: <PartnerProgram />,
      },
      {
        path: "/company/blog",
        element: <CompanyBlog />,
      },
      {
        path: "/company/news",
        element: <CompanyNews />,
      },
      {
        path: "/company/newsletter",
        element: <CompanyNewsletter />,
      },

      {
        path: "/solutions/find-channel-partner",
        element: <PartnersOther />,
      },
      {
        path: "/resources/submit-ticket",
        element: <Security />,
      },
      {
        path: "/resources/online-demo",
        element: <OnlineDemo />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <MenuProvider>
      <RouterProvider router={router} />;
    </MenuProvider>
  );
}
export default App;
