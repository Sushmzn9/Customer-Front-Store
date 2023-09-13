import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <a href="/" className="group relative block">
      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src="https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

        <p className="mt-1.5 max-w-[40ch] text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sequi dicta impedit aperiam ipsum!
        </p>

        <Link
          to="/all-products"
          className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
        >
          Shop Now
        </Link>
      </div>
    </a>
  );
};

export default Hero;
