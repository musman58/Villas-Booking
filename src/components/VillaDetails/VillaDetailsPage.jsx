import React from "react";
import { useParams, Link } from "react-router-dom";
import { villas } from "../../data/villas";
import ImageGallery from "./ImageGallery";
import BookingForm from "./BookingForm";
import AvailabilityCalendar from "./AvailabilityCalendar";
import ReservationForm from "./ReservationForm";
import Comments from "./Comments";
import { Users, Maximize2, Home, ChevronRight, MapPin } from "lucide-react";
import RoomGallery from "./RoomGallery";
import Sidebar from "./Sidebar";

const VillaDetailsPage = () => {
  const { id } = useParams();
  const villa = villas.find((v) => v.id === parseInt(id));

  if (!villa) {
    return <div>Villa not found</div>;
  }

  const roomImages = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  ];

  return (
    <div className="bg-white">
      {/* Main Content */}
      <div className="container mx-auto ">
        <div className="bg-white   overflow-hidden">
          {/* Image Gallery */}
          <ImageGallery images={villa.images} />

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose max-w-none mb-8">
                  <p className="text-lg mb-4">{villa.description}</p>
                  <p className="mb-4">
                    Located 12 miles from Palermo, villa La Merche Etna House
                    offers pet-friendly accommodations in with lots of outdoor
                    and indoor facilities. The villa is equipped with air
                    conditioning and free WiFi. Free private parking is
                    available on site, so you should not have any problems with
                    it.
                  </p>
                  <p className="mb-4">
                    The kitchen is fitted with a dishwasher, refrigerator and an
                    oven. A flat-screen TV is available in several rooms. You'll
                    also enjoy a sun terrace and many other things.
                  </p>
                  <p className="mb-4">
                    You'll also enjoy a variety of activities are available in
                    the area, for example, diving and fishing. The airport is
                    also close – Falcone-Borsellino Airport, several miles away
                    from the property.
                  </p>
                  <p className="mb-4">
                    This villa has access to a beach. The beach is about 15
                    minutes away and has a terrace and/or patio with sea views.
                    There is a private bathroom with a bidet and shower in each
                    unit, along with free toiletries. Towels are featured. The
                    beaches around Roma are especially popular in summer.
                  </p>
                  <p className="mb-4">
                    A perfect place for small and big groups of people, friends
                    and family trips.
                  </p>
                </div>

                {/* Room Gallery */}
                <div className="mb-8">
                  {/* <h2 className="text-2xl font-bold mb-4">Room Views</h2> */}
                  <RoomGallery images={roomImages} />
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Details</h2>
                  <div className="grid grid-cols-1 gap-4 bg-white p-6 ">
                    <div className="grid grid-cols-2 border-b py-3">
                      <dt className="font-medium">Adults:</dt>
                      <dd>10</dd>
                    </div>
                    <div className="grid grid-cols-2 border-b py-3">
                      <dt className="font-medium">Children:</dt>
                      <dd>4</dd>
                    </div>
                    <div className="grid grid-cols-2 border-b py-3">
                      <dt className="font-medium">Amenities:</dt>
                      <dd>
                        Air conditioning, Balcony, Beachfront, Dining area,
                        Flat-screen TV, Free parking, Free WiFi, Outdoor pool
                      </dd>
                    </div>
                    <div className="grid grid-cols-2 border-b py-3">
                      <dt className="font-medium">Views:</dt>
                      <dd>Swimming pool</dd>
                    </div>
                    <div className="grid grid-cols-2 border-b py-3">
                      <dt className="font-medium">Size:</dt>
                      <dd>260m²</dd>
                    </div>
                    <div className="grid grid-cols-2 border-b py-3">
                      <dt className="font-medium">Bed Type:</dt>
                      <dd>1 Queen bed, 4 Twin beds, 1 Full bed</dd>
                    </div>
                    <div className="grid grid-cols-2 py-3">
                      <dt className="font-medium">Categories:</dt>
                      <dd>Le Marche</dd>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  {/* <h2 className="text-2xl font-bold mb-4">Price</h2> */}
                  <p className=" ">
                    Prices start at: $750 for 2 nights (+taxes and fees)
                  </p>
                </div>

                <AvailabilityCalendar />
                <ReservationForm />
                <Comments />
              </div>

              <div className="lg:col-span-1">
                <BookingForm villa={villa} />
                <Sidebar/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaDetailsPage;
