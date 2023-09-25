import React, { useState } from "react";

const DiscountBanner = () => {
  const [buttonText, setButtonText] = useState("Get Promo Code");
  const handleOnChange = () => {
    setButtonText("TECHSALE20");
  };

  return (
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
      <img
        alt="Tech Gadgets"
        src="https://images.unsplash.com/photo-1619948543232-c515a389c22d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2glMjBhcHBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
        className="h-32 w-full object-cover md:h-full"
      />

      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Explore the Latest
        </p>

        <h2 className="mt-6 font-black uppercase">
          <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
            Get 20% off
          </span>

          <span className="mt-2 block text-sm">
            On your next tech purchase over $50
          </span>
        </h2>

        <button
          onClick={handleOnChange}
          className="mt-8 inline-block w-full bg-blue-500 py-4 text-sm font-bold uppercase tracking-widest text-white"
        >
          {buttonText}
        </button>

        <p className="mt-8 text-xs font-medium uppercase text-gray-400">
          Offer valid until 31st December, 2023 *
        </p>
      </div>
    </section>
  );
};

export default DiscountBanner;
