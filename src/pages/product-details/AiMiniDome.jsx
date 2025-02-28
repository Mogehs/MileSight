import NavSection from "../../components/ai-mini-dome/NavSection";
import NdaaSection from "../../components/ai-mini-dome/NdaaSection";
import FormSection from "../../components/ai-mini-dome/FormSection";

const AiMiniDome = () => {
  return (
    <div>
      <NdaaSection
        title="AI Motorized Dome Camera"
        subtitle="Intelligent and Robust for Mission-critical Applications"
        list="2/4/5/8MP,AI Deep Learning,0.005Lux Ultra Low-light,Smart IR II with 50m IR Distance,Motorized Zoom Lens,P-Iris Control,IP67 & IK10,Versatile Interfaces (Optional)"
      />
      <NavSection
        modelData={{
          modelImg: "/mini-dome/section6-img.jpg",
          modelImg2: "/mini-dome/section7-img.png",
          modelImg3: "/mini-dome/section8-img.jpg",
          modelImg4: "/mini-dome/section9-img.png",
          modelImg5: "/mini-dome/section10-img.jpg",
          modelImg6: "/mini-dome/section11-img.jpg",
          modelImg7: "/mini-dome/section12-img.jpg",
        }}
      />
      <FormSection />
    </div>
  );
};

export default AiMiniDome;
