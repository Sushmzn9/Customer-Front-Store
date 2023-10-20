import React from "react";

const BookingTable = ({ bookings }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Repair Type
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Time Slot
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {booking.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {booking.phone}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {booking.email}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {booking.repairType}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {booking.date}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {booking.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
