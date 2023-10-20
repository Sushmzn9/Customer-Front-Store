import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Link to="/" className="group relative block">
      <div className="relative h-[350px] sm:h-[450px] overflow-hidden rounded-lg shadow-xl">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Tech Store"
            className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-opacity-80 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-2xl font-semibold text-white text-center mb-2">
            Welcome to Tech Store
          </h3>

          <p className="text-sm text-white text-center mb-4">
            Your one-stop destination for the latest tech gadgets and
            accessories.
          </p>

          <Link
            to="/all-products"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-5 py-2 text-sm font-semibold text-white uppercase tracking-wider rounded-full transition-transform transform scale-100 group-hover:scale-105"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
