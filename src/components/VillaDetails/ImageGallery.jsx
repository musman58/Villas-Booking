import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images }) => {
  // if (!images || images.length === 0) {
  //   return <div>No images available</div>;
  // }
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[600px] mb-8">
      <img
        src={images[currentImage]}
        alt="Villa view"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevImage}
          className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;