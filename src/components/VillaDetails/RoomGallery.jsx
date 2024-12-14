// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const RoomGallery = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//         {images.map((image, index) => (
//           <div 
//             key={index}
//             className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
//             onClick={() => setSelectedImage(image)}
//           >
//             <img
//               src={image}
//               alt={`Room view ${index + 1}`}
//               className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
//             />
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button 
//             className="absolute top-4 right-4 text-white hover:text-gray-300"
//             onClick={(e) => {
//               e.stopPropagation();
//               setSelectedImage(null);
//             }}
//           >
//             <X className="w-6 h-6" />
//           </button>
//           <div className="relative w-full max-w-4xl aspect-video">
//             <img
//               src={selectedImage}
//               alt="Room view"
//               className="object-contain w-full h-full"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default RoomGallery;























import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const RoomGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden "
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Room view ${index + 1}`}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            onClick={nextSlide}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <img
              src={images[selectedImageIndex]}
              alt={`Room view ${selectedImageIndex + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default RoomGallery;

