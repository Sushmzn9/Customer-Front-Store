import React from "react";
import { Link } from "react-router-dom";

export const PasswordReset = ({ setForm }) => {
  return (
    <section className="h-[65vh]">
      <form className="p-4 max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4">Reset New Password</h3>
        <hr className="border-t mb-4" />

        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="****"
          />
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700"
            type="button"
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
