// import React, { useState } from "react";
// import { Calendar, Users } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const SearchForm = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);

//   const handleSearch = () => {
//     console.log({
//       checkInDate,
//       checkOutDate,
//       adults,
//       children,
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8 relative z-10 bg-white rounded-lg shadow-lg p-8">
//       <h2 className="text-2xl font-bold text-center mb-8">
//         The villa rental expert for your vacation
//       </h2>
//       <p className="text-center text-gray-600 mb-8">
//         Villagio offers diverse villas in different regions to help you spend
//         your dream vacation. Book your villa online quickly and safely.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="relative">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Check-in
//           </label>
//           <div className="relative">
//             <DatePicker
//               selected={checkInDate}
//               onChange={(date) => setCheckInDate(date)}
//               selectsStart
//               startDate={checkInDate}
//               endDate={checkOutDate}
//               minDate={new Date()}
//               placeholderText="Select check-in date"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
//             />
//             <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
//           </div>
//         </div>

//         <div className="relative">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Check-out
//           </label>
//           <div className="relative">
//             <DatePicker
//               selected={checkOutDate}
//               onChange={(date) => setCheckOutDate(date)}
//               selectsEnd
//               startDate={checkInDate}
//               endDate={checkOutDate}
//               minDate={checkInDate || new Date()}
//               placeholderText="Select check-out date"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
//             />
//             <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Adults
//           </label>
//           <select
//             value={adults}
//             onChange={(e) => setAdults(Number(e.target.value))}
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
//           >
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Children
//           </label>
//           <select
//             value={children}
//             onChange={(e) => setChildren(Number(e.target.value))}
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
//           >
//             {[0, 1, 2, 3, 4].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="mt-6 text-center">
//         <button
//           onClick={handleSearch}
//           className="bg-emerald-500 text-white px-8 py-2 rounded-md hover:bg-emerald-600 transition-colors"
//         >
//           SEARCH
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;






import React, { useState } from "react";
import { Calendar, Users } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto mt-8 relative z-10 bg-white   p-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        The villa rental expert for your vacation
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Villagio offers diverse villas in different regions to help you spend
        your dream vacation. Book your villa online quickly and safely.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-end">
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
              placeholderText="Select check-in date"
              className="w-full md:w-40 px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
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
              placeholderText="Select check-out date"
              className="w-full md:w-40 px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
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
            className="w-full md:w-40 px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
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
            className="w-full md:w-40 px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="bg-emerald-500 text-white px-8 py-2  hover:bg-emerald-600 transition-colors h-[42px] mt-6 md:mt-0"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchForm;