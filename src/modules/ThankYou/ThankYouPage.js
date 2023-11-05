import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrderAction } from "../Checkout/OrderAction";
import { useDispatch } from "react-redux";

const ThankYouPage = () => {
  const dispatch = useDispatch();
  const orderNumber = localStorage.getItem("orderNumber");
  console.log(orderNumber, "----thankyou");
  useEffect(() => {
    dispatch(getOrderAction(orderNumber));
  }, [dispatch, orderNumber]);
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white border p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-indigo-500 mb-2">
            Thank You for Shopping!
          </h1>
          <p className="text-lg text-gray-600">
            Your order has been successfully placed.
          </p>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg text-center mb-6">
          <p className="text-lg font-semibold text-indigo-500 mb-2">
            Order Number:
          </p>
          <p className="text-xl text-indigo-800">345678</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Order Details</h2>
          <ul>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Product:</span>{" "}
              Example Product 1
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Quantity:</span> 2
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">
                Total Price:
              </span>{" "}
              $50.00
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Shipping Information</h2>
          <p>
            <span className="text-indigo-600 font-semibold">Address:</span> 123
            Main St, City, Country
          </p>
        </div>
        <Link to="/all-products">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full w-full">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
