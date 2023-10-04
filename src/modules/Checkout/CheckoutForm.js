import React, { useState } from "react";
import Inputs from "../../components/InputField/Inputs";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { postStripePayment } from "../../helper/axios";

const CheckoutForm = ({ formData, total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const { data } = postStripePayment({
      amount: total,
      currency: "aud",
      paymentMethodType: "card",
    });
    console.log(data);
    const clientSecret = data.clientSecret;
  };
  return (
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p className="text-xl font-medium">Delivery Details</p>
      <p className="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="col-span-6 mt-2 sm:col-span-3 border p-4 rounded shadow-lg"
      >
        {formData.map((user) => {
          return <Inputs key={user._id} {...user} onChange={handleOnChange} />;
        })}
        <div className="p-4">
          <CardElement options={{ hidePostalCode: true }} />
        </div>

        <button
          type="submit"
          className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;