// import React, { useState } from 'react';

// const ReservationForm = () => {
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', { checkIn, checkOut });
//   };

//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
//       <div className="bg-white p-6 ">
//         <form onSubmit={handleSubmit}>
//           <p className="text-sm mb-6">
//             Required fields are followed by <span className="text-red-500">*</span>
//           </p>

//           <div className="space-y-6">
//             <div>
//               <label className="block mb-2">
//                 Check-in Date<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={checkIn}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 className="w-full px-4 py-2 border "
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Check-out Date<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={checkOut}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 className="w-full px-4 py-2 border "
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4  transition-colors"
//             >
//               CHECK AVAILABILITY
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReservationForm;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";

const ReservationForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckAvailability = () => {
    console.log({
      checkInDate,
      checkOutDate,
    });
  };

  return (
    <div className="bg-white  mb-8 ">
      <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
      <p className="text-sm mb-6">
        Required fields are followed by <span className="text-red-500">*</span>{" "}
      </p>

      <div className="space-y-4">
        <div>
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
              placeholderText=" check-in date"
              className="w-80 px-4 py-2 border  focus:ring-2 focus:ring-emerald-500"
            />
            {/* <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" /> */}
          </div>
        </div>

        <div>
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
              placeholderText=" check-out date"
              className="w-80 px-4 py-2 border focus:ring-2 focus:ring-emerald-500"
            />
            {/* <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" /> */}
          </div>
        </div>

        <button
          onClick={handleCheckAvailability}
          className="w-40 bg-emerald-500 text-white py-3  hover:bg-emerald-600 transition-colors"
        >
          CHECK AVAILABILITY
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
