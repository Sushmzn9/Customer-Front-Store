import React, { useState } from "react";
import { Link } from "react-router-dom";

export const PasswordReset = ({ setForm, processResetPassAPI }) => {
  const [formDt, setFormDt] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
    console.log(formDt);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formDt;

    processResetPassAPI(rest);
  };
  return (
    <section className="h-[65vh]">
      <form className="p-4 max-w-md mx-auto" onSubmit={handleOnSubmit}>
        <h3 className="text-2xl font-bold mb-4">Reset New Password</h3>
        <hr className="border-t mb-4" />

        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleOnChange}
            placeholder="12345"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleOnChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="****"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleOnChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="****"
          />
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700"
            type="submit"
          >
            Reset Password
          </button>
        </div>

        <div className="text-end py-3">
          Didn't receive OTP
          <Link
            onClick={() => setForm("otp")}
            href="#!"
            className="text-blue-500 hover:underline"
          >
            Request again.
          </Link>
        </div>
      </form>
    </section>
  );
};
