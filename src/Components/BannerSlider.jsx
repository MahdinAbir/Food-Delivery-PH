import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BannerSlider = () => {
  const slides = [
    {
      title: "Share Food, Spread Happiness",
      subtitle: "Join our community to reduce food waste and help others.",
    },
    {
      title: "Donate Surplus Meals",
      subtitle: "Easily donate your extra food and make an impact.",
    },
    {
      title: "Get Food, Save Resources",
      subtitle: "Find available food near you and minimize waste.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants for Framer Motion
  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
  className="relative mx-auto max-w-4xl w-full h-72 sm:h-96 overflow-hidden rounded-xl shadow-lg mb-10"
  style={{
    background:
      "radial-gradient(circle, hsla(265, 49%, 69%, 1) 20%, hsla(226, 69%, 30%, 1) 100%)",
  }}
>
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#0C2A4C] px-8"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-2xl md:text-5xl sm:text-4xl font-bold mb-2 tracking-wide drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg">{slide.subtitle}</p>
              </motion.div>
            )
        )}
      </AnimatePresence>

      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-transform duration-300 ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            } hover:scale-110`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
