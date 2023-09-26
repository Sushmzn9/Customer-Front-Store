import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sushan from "../../assets/Sushan Logo.jpg";
import { ShoppingCart, User } from "lucide-react";
import MyPopover from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../User/userSlice";
import { getProduct, logoutUser } from "../../helper/axios";
import { toast } from "react-toastify";
import SearchPopover from "./Search";

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
  const [displayProduct, setDisplayProduct] = useState([]);
  const [productDt, setProduct] = useState([]);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(displayProduct);

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

  useEffect(() => {
    const fetchProducts = async () => {
      const { product } = await getProduct();
      setProduct(product);
    };
    fetchProducts();
  }, []);

  console.log(productDt);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filterProduct = productDt.filter((item) =>
      item?.name?.toLowerCase().includes(value?.toLowerCase())
    );
    setDisplayProduct(filterProduct);
    console.log(filterProduct);
  };

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
            <SearchPopover
              displayProduct={displayProduct}
              handleOnSearch={handleOnSearch}
            />
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
              className="inline-flex items-center text-white bg-indigo-500 border-2 border-indigo-600 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded-lg text-base"
            >
              <ShoppingCart className="mr-2" />
              {cart?.length > 0 && (
                <span className="text-xs font-semibold bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center transition-all animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
