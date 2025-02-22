import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const successStories = [
  "/success-stories/back-to-school.jpg",
  "/success-stories/story-1.png",
  "/success-stories/story-2.jpg",
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="ml-4 md:ml-23">
        <h1 className="mt-10 font-semibold text-2xl md:text-3xl text-[#333333]">
          Success Stories
        </h1>
        <p className="text-[#333333] mt-2 w-[90%] md:w-full text-[0.8rem] md:text-base">
          Milesight has earned a lot of fame and built a strong reputation with
          a ton of success stories in various industries.
        </p>
      </div>
      <div className="relative w-[95%] md:w-[85%] h-[20rem] md:h-[25rem] mx-auto mt-5 overflow-hidden">
        <AnimatePresence>
          {successStories.map(
            (story, index) =>
              index === currentIndex && (
                <motion.img
                  key={index}
                  src={story}
                  alt="success story"
                  initial={{ y: -250 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full object-cover rounded-lg"
                />
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SuccessStories;
