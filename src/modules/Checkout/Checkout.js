import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.React_App_Publishable_KEY);

const Checkout = () => {
  const [total, setTotal] = useState(0);

  const { cart } = useSelector((state) => state.cartInfo);
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.orderQty;
    }, 0);
    setTotal(total);
  }, [cart]);

  const formData = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
    },
    {
      label: "Phone Number",
      type: "number",
      name: "phone",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
    },
  ];
  return (
    <div className="grid mt-3 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mb-3">
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Summary</p>
        <p className="text-gray-400">
          Check your items. And select a suitable shipping method.
        </p>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {cart.map((cart) => {
            return (
              <div
                key={cart._id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={
                    process.env.REACT_APP_ROOTSERVER + cart.thumbnail?.slice(6)
                  }
                  alt={cart?.name}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{cart?.name}</span>
                  <span className="float-right text-gray-400">
                    Total Item : {cart.orderQty}
                  </span>
                  <p className="mt-auto text-lg font-bold">
                    ${cart?.price * cart?.orderQty}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="text-end font-semibold text-xl">
            Total: ${total?.toFixed(2)}
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm formData={formData} total={total} cart={cart} />
      </Elements>
    </div>
  );
};

export default Checkout;
