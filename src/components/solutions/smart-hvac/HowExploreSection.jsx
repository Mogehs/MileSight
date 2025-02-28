import React, { useState } from "react";
import { GrYoutube } from "react-icons/gr";
import { IoClose } from "react-icons/io5"; // Close icon

function HowExploreSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="my-8">
      <div className="p-4 flex flex-col gap-6">
        <h2 className="md:text-[2rem] lg:text-[2.5rem] text-[25px] text-center text-nowrap text-[#333]">
          Explore More of Devices
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* image-1 */}
          <div>
            <div className="relative w-[100%] h-[50vh]">
              {/* Background Image with Rounded Corners */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/Solution/smart-hvac/explore-img1.jpg')",
                }}
              >
                {/* YouTube Icon */}
                <GrYoutube
                  size={75}
                  className="text-[#d90000] hover:cursor-pointer opacity-[0.8]"
                  onClick={() => setShowVideo(true)}
                />
              </div>
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

          {/* image-2 */}
          <div>
            <div className="relative w-[100%] h-[50vh]">
              {/* Background Image with Rounded Corners */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/Solution/smart-hvac/explore-img2.jpg')",
                }}
              >
                {/* YouTube Icon */}
                <GrYoutube
                  size={75}
                  className="text-[#d90000] hover:cursor-pointer opacity-[0.8]"
                  onClick={() => setShowVideo(true)}
                />
              </div>
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

          {/* image-3 */}
          <div>
            <div className="relative w-[100%] h-[50vh]">
              {/* Background Image with Rounded Corners */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/Solution/smart-hvac/explore-img3.jpg')",
                }}
              >
                {/* YouTube Icon */}
                <GrYoutube
                  size={75}
                  className="text-[#d90000] hover:cursor-pointer opacity-[0.8]"
                  onClick={() => setShowVideo(true)}
                />
              </div>
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
        </div>
      </div>
    </div>
  );
}

export default HowExploreSection;
