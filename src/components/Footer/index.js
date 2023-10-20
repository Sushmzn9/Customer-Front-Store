import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6 border shadow-lg mb-2">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <Link to="/" className="text-sm text-gray-700 hover:text-black block">
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Contact
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <Link
            to="/about"
            className="text-sm text-gray-700 hover:text-black block"
          >
            About Us
          </Link>
          <Link
            to="/faq"
            className="text-sm text-gray-700 hover:text-black block"
          >
            FAQ
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h3 className="text-lg font-semibold mb-2">Policies</h3>
          <Link
            to="/privacy"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Refund Policy
          </Link>
          <Link
            to="/career"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Careers
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <Link
            to="/terms"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Terms of Service
          </Link>
          <Link
            to="/shipping"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Shipping Information
          </Link>
          <Link
            to="/blog"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Blog
          </Link>
          <Link
            to="/newsletter"
            className="text-sm text-gray-700 hover:text-black block"
          >
            Newsletter
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <p className="text-sm">Follow us on:</p>
          <div className="flex justify-start space-x-4">
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              <FacebookIcon />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              <TwitterIcon />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
