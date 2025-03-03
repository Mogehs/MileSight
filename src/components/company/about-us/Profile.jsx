import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // YouTube video URL (Replace with actual video URL)
  const videoSrc = "https://youtu.be/LrgVRwDzlpw?autoplay=1";

  return (
    <div className="w-full flex flex-col items-center lg:pt-3 h-fit mb-10">
      {/* Text Content */}
      <div className="content flex flex-col items-center gap-4 text-center">
        <h1 className="sm:text-4xl text-2xl font-semibold">Company Profile</h1>
        <p className="sm:w-[80vw] px-5 text-gray-600">
          Milesight offers multi-potential sensing products to capture the most
          meaningful data and make it accessible across diverse applications. It
          innovatively applies emerging technologies such as AI, 5G, and IoT to
          distinct use scenarios. With a commitment to making sensing matter,
          Milesight quickly responds to customer-specific challenges and
          collaborates with an expanding network of partners to deliver unique
          data value. It aims to make real, positive impacts in smart buildings,
          intelligent traffic, intelligent security, smart cities, and beyond.
        </p>
      </div>

      {/* Video Thumbnail */}
      <div
        className="relative w-[80vw] pt-5 lg:w-[50vw] sm:w-[60vw] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/company/video1.jpg"
          alt="Company Video"
          className="w-full rounded-lg shadow-lg"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-red-700 bg-opacity-50 p-2 rounded-full">
            <svg
              className="w-14 h-14 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isOpen && (
        <div className="fixed top-30 left-50 w-[70vw] m-auto flex justify-center items-center bg-black bg-opacity-70 z-[200]">
          <div className="relative w-[90%] max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute -top-5 -right-5 text-black text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <AiFillCloseCircle />
            </button>
            {/* Embedded YouTube Video */}
            <iframe
              className="w-full aspect-video rounded-lg"
              src={videoSrc}
              title="Company Profile Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
