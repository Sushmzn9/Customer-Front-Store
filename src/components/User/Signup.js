import React, { useState } from "react";
import Inputs from "../InputField/Inputs";
import { Link } from "react-router-dom";
import { postUserSignUpAction } from "./userAction";
import { toast } from "react-toastify";
import Sushan from "../../assets/Sushan Logo.jpg";

const SignUp = () => {
  const inputs = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      required: true,
    },
    {
      label: "Phone No.",
      type: "number",
      name: "phone",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      required: true,
    },
  ];
  const [formDt, setFormDt] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = formDt;
    if (confirmPassword !== rest.password) {
      return toast.error("Passwords do not match");
    }

    postUserSignUpAction(rest);
  };

  return (
    <section className="bg-gray-100">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Tech Store Background"
            src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2glMjBhcHBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" to="/">
              <span className="sr-only">Home</span>
              <img src={Sushan} alt="" className="h-8 sm:h-10 rounded-full" />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Tech Store 🚀
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Discover the latest tech gadgets and accessories at Tech Store.
              Join us and stay updated with the future of technology.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img
                  src={Sushan}
                  alt=""
                  className="h-15 sm:h-15 rounded-full"
                />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Tech Store 🚀
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Discover the latest tech gadgets and accessories at Tech Store.
                Join us and stay updated with the future of technology.
              </p>
            </div>

            <form
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleOnSubmit}
            >
              {inputs.map((item, i) => {
                return (
                  <div className="col-span-6 sm:col-span-3">
                    <Inputs key={i} {...item} onChange={handleOnChange} />
                  </div>
                );
              })}
              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="text-gray-700 underline uppercase font-bold font-sans ml-2"
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignUp;
