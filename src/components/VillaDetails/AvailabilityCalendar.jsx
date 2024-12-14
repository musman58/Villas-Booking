import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AvailabilityCalendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  
  // Mock data for unavailable dates
  const unavailableDates = [
    new Date(2024, 11, 24), // December 24, 2024
    new Date(2024, 11, 25), // December 25, 2024
    new Date(2024, 11, 31), // December 31, 2024
    new Date(2025, 0, 1),   // January 1, 2025
  ];

  const isDateUnavailable = (date) => {
    return unavailableDates.some(unavailableDate =>
      date.getDate() === unavailableDate.getDate() &&
      date.getMonth() === unavailableDate.getMonth() &&
      date.getFullYear() === unavailableDate.getFullYear()
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Availability</h2>
      <div className=" p-4 bg-white">
        <DatePicker
          selected={null}
          onChange={(dates) => setSelectedDates(dates)}
          monthsShown={2}
          inline
          selectsRange
          minDate={new Date()}
          excludeDates={unavailableDates}
          dayClassName={date =>
            isDateUnavailable(date) ? "bg-red-100 text-red-600" : undefined
          }
        />
      </div>
    </div>
  );
};

export default AvailabilityCalendar;