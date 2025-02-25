import React, { useRef, useEffect, useState } from "react";
import RestroomCards from "./RestroomCards";

function RestroomSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when video comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !isPlaying) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (!isVisible && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying]);
  return (
    <div className="mt-4" id="smart-restroom">
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 md:px-8">
          <h1 className="md:text-[3rem] text-[25px] text-[#333]">
            Yes! Get Milesight Smart Restroom Solution
          </h1>
          <p className="text-[#666]">
            Milesight Smart Restroom Solution seamlessly integrates advanced
            operational and environmental sensors and IoT technologies breaking
            the limitations of traditional restrooms. It intelligently replaces
            the sensory systems of manpower to convert what is supposed to be
            “detected”, “smelled”, “touched”, “connected” and “told” into
            visible and easy-to-get information, realizing real-time monitoring
            and quick response for supreme user experience and the most
            efficient management.
          </p>
        </div>
        <div className="relative flex justify-center items-center p-4">
          {/* Restroom Cards Positioned Above the Video */}
          <div className="absolute top-8 z-10">
            <RestroomCards />
          </div>
          <div className="relative w-full">
            <video
              ref={videoRef}
              src="/Solution/smart-restroom/milesight-smart-restroom.mp4"
              className="w-full h-auto  rounded-lg shadow-lg"
              muted
              loop
              onMouseEnter={() => videoRef.current.play()} // Auto-play on hover
              // onMouseLeave={() => videoRef.current.pause()} // Pause when mouse leaves
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestroomSection;
