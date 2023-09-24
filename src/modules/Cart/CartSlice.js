import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      console.log(payload, "coming from paylaod");
      const isProductNew = !state.cart.find((item) => item._id === payload._id);

      if (isProductNew) {
        state.cart = [...state.cart, payload];
      } else {
        const index = state.cart.findIndex((item) => item._id === payload._id);
        console.log(index, "this is a index to be replaced");

        // state.cart = [payload];
        state.cart = state.cart.splice(index, 1, payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
  },
});

const { reducer, actions } = cartSlice;
export const { setCart, removeFromCart } = actions;
export default reducer;
