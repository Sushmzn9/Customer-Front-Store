import React from "react";

const Inputs = ({ label, ...rest }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        {...rest}
        className="mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border"
      />
    </>
  );
};

export default Inputs;
