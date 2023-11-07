import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrderAction } from "../Checkout/OrderAction";
import { useDispatch, useSelector } from "react-redux";

const ThankYouPage = () => {
  const dispatch = useDispatch();
  const orderNumBer = localStorage.getItem("orderNumber");
  useEffect(() => {
    dispatch(getOrderAction(orderNumBer));
  }, [dispatch, orderNumBer]);
  const { order } = useSelector((state) => state.orderInfo);
  const { form, orderNumber, cart } = order;
  console.log(form, orderNumber, cart);

  return (
    <div className="bg-gray-100 p-8 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full  border p-8 rounded-lg shadow-lg h-fit">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Thank You for Shopping!
          </h1>
          <p className="text-lg text-gray-700">
            Your order has been successfully placed.
          </p>
        </div>

        <div className="bg-indigo-100 p-4 rounded-lg text-center mb-6">
          <p className="text-lg font-semibold text-indigo-700 mb-2">
            Order Number:
          </p>
          <p className="text-xl text-indigo-900">{orderNumber}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>

          {cart?.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <div className="w-20">
                <img
                  className="h-24 object-contain"
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt={item?.name}
                />
              </div>
              <p className="text-lg text-indigo-700 font-semibold">
                {item.name}
              </p>
              <p>
                <span className="text-indigo-600 font-semibold">
                  Order Qty:
                </span>
                {item.orderQty}
              </p>
              <p>
                <span className="text-indigo-600 font-semibold">Price:</span>{" "}
                {item.price * item.orderQty}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Shipping Information
          </h2>

          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <p className="text-lg text-indigo-700 font-semibold">
              <span className="text-indigo-600">Name:</span> {form.fName}
            </p>
            <p className="text-lg text-indigo-700 font-semibold">
              <span className="text-indigo-600">Phone:</span> {form?.phone}
            </p>
            <p className="text-lg text-indigo-700 font-semibold">
              <span className="text-indigo-600">Address:</span> {form?.address}
            </p>
          </div>
        </div>

        <Link to="/all-products">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full w-full">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
