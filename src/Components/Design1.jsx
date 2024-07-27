import React, { useState } from "react";

const Design1 = () => {
  const slides = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleSlideChange = (index) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 slide ${
              currentSlide === index
                ? direction === "right"
                  ? "slide-in-right"
                  : "slide-in-left"
                : "hidden"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto min-h-96 "
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded">
        Static Button
      </button>
    </div>
  );
};

export default Design1;
