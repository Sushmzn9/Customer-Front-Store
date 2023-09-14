import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/Signup";
import { ToastContainer } from "react-toastify";
import UserVerification from "./components/User/UserVerification";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/products/:slug?/:_id?" element={<Product />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/category/:slug?/:_id?" element={<CategoryProducts />} />
        <Route path="/user-verification" element={<UserVerification />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
