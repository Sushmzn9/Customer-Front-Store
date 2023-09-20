import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/User/userSlice";
import cartReducer from "./modules/Cart/CartSlice.js";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    cartInfo: cartReducer,
  },
});
export default store;
