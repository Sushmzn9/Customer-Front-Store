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
import { ToastContainer, Zoom } from "react-toastify";
import PrivateRoute from "./modules/Private/privateRoute";
import Checkout from "./modules/Checkout/Checkout";
import Booking from "./modules/Booking/Booking";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBookingAction } from "./modules/Booking/BookingAction";
import UserVerification from "./components/User/UserVerification";
import { ResetPassword } from "./components/PasswordReset/ResetPassword";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug?/:_id?" element={<Product />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/category/:slug?/:_id?" element={<CategoryProducts />} />
        <Route path="/user-verification" element={<UserVerification />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        theme="colored"
      />
    </div>
  );
}

export default App;
