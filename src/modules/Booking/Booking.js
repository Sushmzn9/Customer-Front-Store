import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postBookAction } from "./BookingAction";

const Booking = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    repairType: "laptop",
    date: "",
    time: "morning",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postBookAction(form));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section className="flex container w-full mx-auto items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-serif text-center mb-6">
          Book Now for Repair
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleOnChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleOnChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleOnChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="repairType"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Select Repair Type
            </label>
            <select
              name="repairType"
              id="repairType"
              value={form.repairType}
              onChange={handleOnChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="laptop">Laptop Repair</option>
              <option value="phone">Phone Repair</option>
              <option value="tablet">Tablet Repair</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Select Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={form.date}
              onChange={handleOnChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Select Time Slot
            </label>
            <select
              name="time"
              id="time"
              value={form.time}
              onChange={handleOnChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
              <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-[#5347A0]"
            >
              Book Slot
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
