import React from "react";
import img1 from "/newoimg/news.avif";

function Hero() {
  return (
    <div
      className="w-full h-[70vh] bg-center bg-cover flex items-center "
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Gradient Overlay for Better Readability */}

      <div className="h-full w-full bg-black/50 flex flex-col justify-center">
        {/* Content Wrapper */}
        <div className="  text-white max-w-2xl px-6 sm:px-20">
          <h1 className="text-4xl font-bold sm:text-5xl  drop-shadow-md ">
             News
          </h1>
          <p className="mt-3 text-lg sm:text-xl leading-relaxed max-w-lg animate-slideUp">
            Stay updated with the latest news from Milesight. Discover new
            product launches, events, and more.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;
