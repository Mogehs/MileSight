import { useEffect, useRef } from "react";
import one from "/Integration/3deye.png";
import two from "/Integration/akuvox.png";
import three from "/Integration/axxonsoft.png";
import four from "/Integration/cathexis.png";
import five from "/Integration/chekt.png";
import six from "/Integration/digiever.png";
import seven from "/Integration/digifort.png";
import eight from "/Integration/eocortex.png";
import nine from "/Integration/immix.png";
import ten from "/Integration/luxriot.png";
import eleven from "/Integration/mirasys.png";
import twelve from "/Integration/network-optix.png";
import thirteen from "/Integration/salient.png";

const images = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen];

export default function AdvetiseComp() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const startScrolling = () => {
      animation = slider.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
        {
          duration: 40000, 
          iterations: Infinity,
          easing: "linear",
        }
      );
    };

    startScrolling();

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      animation.cancel();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-5 bg-gray-100">
      <div ref={sliderRef} className="flex w-[200%]">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="w-40 md:w-52 p-2 flex-shrink-0 cursor-pointer">
            <img src={img} alt={`Slide ${index}`} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
