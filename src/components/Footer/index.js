import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6 border shadow-lg mb-2">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tech Store. All rights reserved.
          </p>
        </div>
        <div className="mb-4">
          <Link to="/about" className="text-sm text-gray-700 hover:text-black">
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-700 hover:text-black"
          >
            Contact
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/privacy"
            className="text-sm text-gray-700 hover:text-black"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-sm text-gray-700 hover:text-black">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
