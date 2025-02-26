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
import Contact from "./pages/Contact";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-7xl">
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
        path: "/solutions/intelligent-traffic-solution",
        element: <IntelligentTrafficSoluiton />,
      },
      { path: "/products/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
