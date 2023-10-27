import React, { useRef } from "react";

export const PasswordOTP = ({ handleOnOtpRequest }) => {
  const emailRef = useRef("");

  const handleOnOTPRequest = () => {
    const { value } = emailRef.current;
    if (value) {
      handleOnOtpRequest(value);
    }
  };

  return (
    <section className="h-[65vh]">
      <form className="p-4 max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4">Request OTP</h3>
        <hr className="border-t mb-4" />

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            ref={emailRef}
            placeholder="sam@email.com"
          />
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700"
            type="button"
            onClick={handleOnOTPRequest}
          >
            Request OTP
          </button>
        </div>
      </form>
    </section>
  );
};
