import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./components/User/userSlice";
import cartReducer from "./modules/Cart/CartSlice";
import bookReducer from "./modules/Booking/BookingSlice";

const cartpersistConfig = {
  key: "cartInfo",
  storage,
};
const persistedCartReducer = persistReducer(cartpersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    // cartInfo: cartReducer,
    cartInfo: persistedCartReducer,
    bookInfo: bookReducer,
  },
});
const persister = persistStore(store);

export { store, persister };
