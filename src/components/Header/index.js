import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sushan from "../../assets/Sushan Logo.jpg";
import { Search, ShoppingCart, User } from "lucide-react";
import MyPopover from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../User/userSlice";
import { logoutUser } from "../../helper/axios";
import { toast } from "react-toastify";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/all-products",
  },
  {
    name: "Booking",
    path: "/Book",
  },
];

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogout = () => {
    logoutUser(user._id);

    //clear storages
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");

    // reset store
    dispatch(setUser({}));

    toast.success("Logged Out");

    navigate("/");
  };
  const { cart } = useSelector((state) => state.cartInfo);
  return (
    <header className="text-gray-600 body-font shadow-lg sticky w-full top-0 z-10 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <Link
          to={"/"}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={Sushan} alt="" className="h-10 hidden md:inline-flex" />
          <span className="ml-3 text-xl font-serif font-bold hidden md:inline-flex">
            Tech Store
          </span>
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
        <div className="mt-3 mb-3">
          <MyPopover />
        </div>
        <div className="flex gap-2 mt-2 justify-center items-center">
          <div className="relative justify-center items-center sm:block">
            <label className="sr-only" htmlFor="search">
              Search
            </label>

            <input
              className="h-10 w-full rounded-lg border bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-5 md:-translate-y-1/2 rounded-md p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <Search />
            </button>
          </div>
          <div className="gap-2 flex justify-center items-center">
            {user?._id ? (
              <>
                <Link
                  to="#!"
                  className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base"
                  onClick={handleOnLogout}
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link
                to={"/signin"}
                className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base"
              >
                <User />
              </Link>
            )}

            <Link
              to={"/cart"}
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base"
            >
              <ShoppingCart /> {cart?.length}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
