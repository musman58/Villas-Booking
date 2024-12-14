import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    region: "Le Marche",
    title: "Villa Bastilicata Grande",
    description:
      "This is a perfect villa with spa center and hot tub for private, family and corporate rest in Le Marche region in Italy, with best nature views.",
    price: "$630 for 3 nights",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    region: "Lazio",
    title: "Seaside Villa",
    description:
      "A beautiful villa with direct access to the coastline area, perfect for summer vacation.",
    price: "$750 for 3 nights",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* <div className="absolute inset-0 flex items-center justify-between px-8">
        <button onClick={prevSlide} className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div> */}

      <div className="absolute bottom-32 left-16 text-white">
        <Link
          to={"/"}
          className="text-white   hover:bg-emerald-500  px-1 py-1 "
        >
          {slides[currentSlide].region}
        </Link>
        <h2 className="text-4xl font-bold mt-4 mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="max-w-xl mb-6">{slides[currentSlide].description}</p>
        <div className="flex items-center gap-4">
          <p>Prices start at: {slides[currentSlide].price}</p>
          <Link
            to={`/villa/` + 1}
            className="bg-emerald-500 px-6 py-2  hover:bg-emerald-600"
          >
            BOOK
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-16 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-1 rounded ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
