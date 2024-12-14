import React from "react";
import { categoryData } from "../data/categoryData";
import BookingForm from "../components/VillaDetails/BookingForm";
import { Link } from "react-router-dom";
import Sidebar from "../components/VillaDetails/Sidebar";

const AccommodationCategoryPage = () => {
  
  const villas = categoryData["aosta-valley"].villas;

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Villas List */}
          <div className="lg:col-span-2">
            {villas.map((villa, index) => (
              <div
                key={index}
                className="p-6 bg-white   mb-8"
              >
                {/* Villa Image */}
                <div className="relative mb-4">
                  <img
                    src={villa.mainImage}
                    alt={villa.name}
                    className="w-full h-auto object-cover "
                  />
                  <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 ">
                    {categoryData["aosta-valley"].title}
                  </div>
                </div>

                {/* Villa Details */}
                <h2 className="text-2xl font-bold mb-4">{villa.name}</h2>
                <p className="text-gray-700 mb-4">{villa.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-medium text-gray-900">Adults:</h3>
                    <p>{villa.maxGuests}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Children:</h3>
                    <p>{villa.children || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Amenities:</h3>
                    <p>{villa.amenities.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">View:</h3>
                    <p>{villa.views?.join(", ") || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Size:</h3>
                    <p>{villa.size || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Bed Type:</h3>
                    <p>{villa.bedrooms || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Price:</h3>
                    <p>${villa.price} per night</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    to={`/villa/${villa.id}`}
                    className="text-gray-600 hover:underline text-sm font-medium"
                  >
                    View Details
                  </Link>
                  <button className="bg-emerald-500 text-white px-4 py-2  hover:bg-emerald-600">
                    BOOK
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white  ">
              {/* <h3 className="text-xl font-bold mb-4">Book Now</h3> */}
              <BookingForm villa={villas[0]} />{" "}
              <Sidebar/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCategoryPage;
