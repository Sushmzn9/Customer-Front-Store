import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/User/userSlice";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});
export default store;
