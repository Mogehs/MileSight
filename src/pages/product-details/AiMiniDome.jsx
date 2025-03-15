import { useSearchParams } from "react-router-dom";
import NavSection from "../../components/ai-mini-dome/NavSection";
import NdaaSection from "../../components/ai-mini-dome/NdaaSection";
import FormSection from "../../components/ai-mini-dome/FormSection";

const cameraData = {
  "AI IR Mini Dome Camera": {
    subtitle: "Intelligent and Robust for Mission-critical Applications",
    list: "2/4/5/8MP, AI Deep Learning, 0.005Lux Ultra Low-light, Smart IR II with 50m IR Distance, Motorized Zoom Lens, P-Iris Control, IP67 & IK10, Versatile Interfaces (Optional)",
    images: {
      modelImg:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png",
      modelImg2:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-43.png",
      modelImg3:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-44.png",
    },
  },
  "AI Motorized Bullet Camera Mini": {
    subtitle: "Advanced Protection with AI-powered Surveillance",
    list: "5MP, AI Face Recognition, Wide Dynamic Range, Anti-Shock & IP67 Protection",
    images: {
      modelImg:
        "/client-pic/Mini Series/AI Motorized Bullet Network Camera _ Mini/AI Motorized Bullet Network Camera _ Mini-48.png",
      modelImg2:
        "/client-pic/Mini Series/AI Motorized Bullet Network Camera _ Mini/AI Motorized Bullet Network Camera _ Mini-49.png",
      modelImg3:
        "/client-pic/Mini Series/AI Motorized Bullet Network Camera _ Mini/AI Motorized Bullet Network Camera _ Mini-50.png",
    },
  },
  "AI Motorized Dome Camera Mini": {
    subtitle: "Advanced Protection with AI-powered Surveillance",
    list: "5MP, AI Face Recognition, Wide Dynamic Range, Anti-Shock & IP67 Protection",
    images: {
      modelImg:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png",
      modelImg2:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-43.png",
      modelImg3:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-44.png",
    },
  },
  "AI Vandal proof Mini Bullet Network Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png",
      modelImg2:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-43.png",
      modelImg3:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-44.png",
    },
  },
  "AI Weather proof Mini Dome Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png",
      modelImg2:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-43.png",
      modelImg3:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-44.png",
    },
  },
  "AI Weather proof Mini Bullet": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png",
      modelImg2:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-43.png",
      modelImg3:
        "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-44.png",
    },
  },
  //Pro Series
  "AI 4X_12X Pro Bullet Plus Network Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Pro Series/AI 4X_12X Pro Bullet Plus Network Camera/AI 4X_12X Pro Bullet Plus Network Camera (3).png",
      modelImg2:
        "/client-pic/Pro Series/AI 4X_12X Pro Bullet Plus Network Camera/AI 4X_12X Pro Bullet Plus Network Camera (2).png",
      modelImg3:
        "/client-pic/Pro Series/AI 4X_12X Pro Bullet Plus Network Camera/AI 4X_12X Pro Bullet Plus Network Camera (1).png",
    },
  },
  "AI Motorized Pro Bullet Network Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Pro Series/AI Motorized Pro Bullet Network Camera/AI Motorized Pro Bullet Network Camera _-69.png",
      modelImg2:
        "/client-pic/Pro Series/AI Motorized Pro Bullet Network Camera/AI Motorized Pro Bullet Network Camera _-68.png",
      modelImg3:
        "/client-pic/Pro Series/AI Motorized Pro Bullet Network Camera/AI Motorized Pro Bullet Network Camera _-67.png",
    },
  },
  "AI Motorized Pro Bullet Plus": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Pro Series/AI Motorized Pro Bullet Plus/ai-pro-bullet-plus-side Camera-58-58.png",
      modelImg2:
        "/client-pic/Pro Series/AI Motorized Pro Bullet Plus/ai-pro-bullet-plus-side Camera-57.png",
      modelImg3:
        "/client-pic/Pro Series/AI Motorized Pro Bullet Plus/ai-pro-bullet-plus-side Camera-59.png",
    },
  },
  "AI Motorized Pro Dome Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Pro Series/AI Motorized Pro Dome Network Camera/ai-pro-dome-camera--60.png",
      modelImg2:
        "/client-pic/Pro Series/AI Motorized Pro Dome Network Camera/ai-pro-dome-camera--61.png",
      modelImg3:
        "/client-pic/Pro Series/AI Motorized Pro Dome Network Camera/ai-pro-dome-camera--62.png",
    },
  },
  "AI Pro Box Plus Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/Pro Series/AI Pro Box Plus Network Camera/AI Pro Box Plus Network Camera-65.png",
      modelImg2:
        "/client-pic/Pro Series/AI Pro Box Plus Network Camera/AI Pro Box Plus Network Camera-64.png",
      modelImg3:
        "/client-pic/Pro Series/AI Pro Box Plus Network Camera/AI Pro Box Plus Network Camera-63.png",
    },
  },
  //color series
  "AI Color Vandal-proof Mini Bullet Network Camera-70": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg: "/client-pic/Color-Series/3.png",
    },
  },
  "AI Color Vandal-proof Mini Bullet Network Camera-71": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg: "/client-pic/Color-Series/2.png",
    },
  },
  "AI Color Vandal-proof Mini Bullet Network Camera-72": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg: "/client-pic/Color-Series/1.png",
    },
  },
  "AI 5X_20X_23X PTZ Bullet Plus Network Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/PTZ Series/AI 5X_20X_23X PTZ Bullet Plus Network Camera _/ptz-bullet-plus-camera-3-06.png",
      modelImg2:
        "/client-pic/PTZ Series/AI 5X_20X_23X PTZ Bullet Plus Network Camera _/ptz-bullet-plus-camera-3-05.png",
      modelImg3:
        "/client-pic/PTZ Series/AI 5X_20X_23X PTZ Bullet Plus Network Camera _/ptz-bullet-plus-camera-3-04.png",
    },
  },
  "AI 12X PTZ Bullet Network Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/PTZ Series/AI 12X PTZ Bullet Network Camera/ai-12x-ptz-bullet-network-camera-pedestal-mount-right-10.png",
      modelImg2:
        "/client-pic/PTZ Series/AI 12X PTZ Bullet Network Camera/ai-12x-ptz-bullet-network-camera-pedestal-mount-right-11.png",
      modelImg3:
        "/client-pic/PTZ Series/AI 12X PTZ Bullet Network Camera/ai-12x-ptz-bullet-network-camera-pedestal-mount-right-12.png",
    },
  },
  "AI 12X_20X_23X PTZ Dome Security Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/PTZ Series/AI 12X_20X_23X PTZ Dome Security Camera/ptz-dome-3-07.png",
      modelImg2:
        "/client-pic/PTZ Series/AI 12X_20X_23X PTZ Dome Security Camera/ptz-dome-3-08.png",
      modelImg3:
        "/client-pic/PTZ Series/AI 12X_20X_23X PTZ Dome Security Camera/ptz-dome-3-09.png",
    },
  },
  "AI 36X_42X Speed Dome Network Camera with Wiper": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",

    images: {
      modelImg:
        "/client-pic/PTZ Series/AI 36X_42X Speed Dome Network Camera with Wiper _/AI 36X_42X Speed Dome Network Camera with Wiper _-16.png",
      modelImg2:
        "/client-pic/PTZ Series/AI 36X_42X Speed Dome Network Camera with Wiper _/AI 36X_42X Speed Dome Network Camera with Wiper _-17.png",
      modelImg3:
        "/client-pic/PTZ Series/AI 36X_42X Speed Dome Network Camera with Wiper _/AI 36X_42X Speed Dome Network Camera with Wiper-18.png",
    },
  },
  "PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera": {
    subtitle: "Full-Color Night Vision with AI Precision",
    list: "4K Ultra HD, Smart AI Detection, Full-Color Night Vision, IP67 Weatherproof",
    images: {
      modelImg:
        "/client-pic/PTZ Series/PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera/wiper-speed-dome-CAmera-13.png",
      modelImg2:
        "/client-pic/PTZ Series/PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera/wiper-speed-dome-CAmera-14.png",
      modelImg3:
        "/client-pic/PTZ Series/PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera/wiper-speed-dome-CAmera-15.png",
    },
  },
};

const AiMiniDome = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "AI Motorized Dome Camera";

  const selectedCamera = cameraData[title];

  if (!selectedCamera) {
    return <div className="text-center text-red-500">Camera not found!</div>;
  }

  return (
    <div>
      <NdaaSection
        title={title}
        subtitle={selectedCamera.subtitle}
        list={selectedCamera.list}
        images={selectedCamera.images}
      />

      <NavSection modelData={selectedCamera.images} />

      <FormSection />
    </div>
  );
};

export default AiMiniDome;
