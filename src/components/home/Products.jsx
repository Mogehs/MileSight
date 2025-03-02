import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";

const cards = [
  {
    name: "Video Surveillance",
    video: "/home/security.mp4",
  },
  {
    name: "Intelligent Traffic",
    video: "/home/traffic.mp4",
  },
  {
    name: "LoRaWAN Sensor",
    video: "/home/lorawan-sensor.mp4",
  },
  {
    name: "LoRaWAN Gateway",
    video: "/home/lorawan-gateway.mp4",
  },
  {
    name: "People Sensing Series",
    image: "/home/people-sensing-series (1).jpg",
  },
  {
    name: "IoT Controller",
    video: "/home/iot-controller.mp4",
  },
  {
    name: "Industrial 5G/4G Routers",
    video: "/home/router.mp4",
  },
  {
    name: "5G Suite",
    video: "/home/5g.mp4",
  },
];

const Products = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleNext = () => {
    setSelectedCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setSelectedCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div>
      <h1 className="mt-10 text-center font-bold text-4xl text-[#333333]">
        Products
      </h1>
      <p className="text-[#333333] text-center w-[95%] md:w-[70%] lg:w-[45%] mx-auto mt-5">
        Milesight innovates and re-innovates the most intelligent in the
        Internet of Things to prompt broader possibilities behind significant
        insights.
      </p>

      {/* Desktop Grid View */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 md:w-full lg:w-[80%] mx-auto mt-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            image={card.image}
            video={card.video}
          />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="rounded-2xl w-full mt-10 p-4 md:hidden">
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCard}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card
                name={cards[selectedCard].name}
                image={cards[selectedCard].image}
                video={cards[selectedCard].video} // ✅ Pass video here
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center md:hidden mt-4">
          <button
            className="block text-center text-xs text-[#333333] mx-2"
            onClick={handlePrev}
          >
            {cards[(selectedCard - 1 + cards.length) % cards.length].name}
          </button>
          <button
            className="block text-center text-xs text-[#333333] mx-2"
            onClick={handleNext}
          >
            {cards[(selectedCard + 1) % cards.length].name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
