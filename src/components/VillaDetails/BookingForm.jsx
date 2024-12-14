import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from 'lucide-react';

const BookingForm = ({ villa }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleCheckAvailability = () => {
    console.log({
      checkInDate,
      checkOutDate,
      adults,
      children,
      villaId: villa.id
    });
  };

  return (
    <div className="bg-white p-6    top-24">
      {/* <h3 className="text-xl font-bold mb-2">Book this villa</h3> */}
      {/* <div className="flex items-baseline gap-2 mb-6">
        <span className="text-2xl font-bold">{villa.price}</span>
        <span className="text-gray-600">{villa.priceDetails}</span>
      </div> */}

      <div className="space-y-4">
      <p className="text-sm mb-6">
        Required fields are followed by <span className="text-red-500">*</span>{" "}
      </p>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check-in
          </label>
          <div className="relative">
            <DatePicker
              selected={checkInDate}
              onChange={date => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              placeholderText="Select check-in date"
              className="w-full px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check-out
          </label>
          <div className="relative">
            <DatePicker
              selected={checkOutDate}
              onChange={date => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              placeholderText="Select check-out date"
              className="w-full px-4 py-2 border focus:ring-2 focus:ring-emerald-500"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adults
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Children
            </label>
            <select
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
            >
              {[0,1,2,3,4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleCheckAvailability}
          className="w-full bg-emerald-500 text-white py-3  hover:bg-emerald-600 transition-colors"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default BookingForm;