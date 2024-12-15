import React, { useState } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    console.log({
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto bg-white   p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
          The villa rental expert for your vacation
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 px-2">
          Villagio offers diverse villas in different regions to help you spend
          your dream vacation. Book your villa online quickly and safely.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-in
            </label>
            <div className="relative">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                placeholderText="Select check-in"
                className="w-full px-4 py-2 border  focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-out
            </label>
            <div className="relative">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate || new Date()}
                placeholderText="Select check-out"
                className="w-full px-4 py-2 border  focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adults
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full px-4 py-2 border  focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Adult" : "Adults"}
                </option>
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
              className="w-full px-4 py-2 border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Child" : "Children"}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium text-transparent mb-1">
              Search
            </label>
            <button
              onClick={handleSearch}
              className="w-full bg-emerald-500 text-white px-8 py-2  hover:bg-emerald-600 transition-colors duration-200 ease-in-out h-[42px]"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
