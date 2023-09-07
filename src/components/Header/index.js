import React from "react";
import { Link } from "react-router-dom";
import Sushan from "../../assets/Sushan Logo.jpg";
import { Search, ShoppingCart, User } from "lucide-react";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/products",
  },
  {
    name: "Booking",
    path: "/Book",
  },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={Sushan} alt="" className="h-10" />
          <span className="ml-3 text-xl font-serif font-bold">Tech Store</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => {
            return (
              <Link
                to={navigation.path}
                className="mr-5 hover:text-gray-900 uppercase font-bold"
              >
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-2">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm border border-gray-300 
            text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products"
            required
          />
          <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
            <Search />
          </button>

          <Link
            to={"/signin"}
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
          >
            <User />
          </Link>
          <Link
            to={"/cart"}
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
          >
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
