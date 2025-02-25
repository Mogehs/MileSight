import React, { useState } from "react";
import { GrYoutube } from "react-icons/gr";
import { IoClose } from "react-icons/io5"; // Close icon

function SmartnessSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="mt-2 p-4 flex gap-4 flex-col items-center relative">
      <h1 className="text-[#333] md:text-[3rem] text-[25px]">
        Reshape Restrooms with Smartness
      </h1>

      <div className="relative md:w-1/2 w-[100%] h-[50vh]">
        {/* Background Image with Rounded Corners */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/Solution/smart-restroom/smartness-img.jpg')",
          }}
        >
          {/* YouTube Icon */}
          <GrYoutube
            size={75}
            className="text-[#e9e3e4] hover:cursor-pointer opacity-[0.8]"
            onClick={() => setShowVideo(true)}
          />
        </div>

        {/* Custom Shadow on Left & Bottom */}
        <div className="absolute inset-0 rounded-lg pointer-events-none before:absolute before:inset-0 before:rounded-lg before:shadow-[10px_10px_20px_rgba(0,0,0,0.3),-10px_10px_20px_rgba(0,0,0,0.2)]"></div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-[0.85] z-50">
          {/* Close Button */}
          <IoClose
            size={40}
            className="text-white absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowVideo(false)}
          />

          {/* Video Player */}
          <div className="w-3/4 md:w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/sVqGIrfp7Mo"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default SmartnessSection;
