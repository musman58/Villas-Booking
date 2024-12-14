import React from "react";
import { Users, Home, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

const VillaCard = ({ villa }) => {
  return (
    <div className="bg-white   overflow-hidden">
      <Link to={`/villa/${villa.id}`}>
        <img
          src={villa.image}
          alt={villa.title}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Link to={'/'} className=" text-gray-600 hover:bg-teal-500  px-2 py-0.5 text-sm ">
            {villa.location}
          </Link>
        </div>
        <h3 className="text-xl font-bold mb-2">{villa.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{villa.description}</p>

        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{villa.capacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <Home className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{villa.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{villa.size}m²</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {villa.amenities.map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 text-xs "
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Prices start at:</p>
            <p className="font-bold text-lg">
              ${villa.price}{" "}
              <span className="font-normal text-sm text-gray-600">
                {villa.priceDetails}
              </span>
            </p>
          </div>
        
        </div>
        <div className="flex gap-3 mt-4">
            
            <button className="bg-teal-500 text-white px-4 py-2  hover:bg-teal-600 text-sm font-medium">
              BOOK
            </button>
            <Link
              to={`/villa/${villa.id}`}
              className="text-gray-600 hover:underline text-sm font-medium"
            >
              View Details
            </Link>
          </div>
      </div>
    </div>
  );
};

export default VillaCard;
