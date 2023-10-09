import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      const isProductNew = !state.cart.find((item) => item._id === payload._id);

      if (isProductNew) {
        state.cart = [...state.cart, payload];
      } else {
        const index = state.cart.findIndex((item) => item._id === payload._id);

        if (index !== -1) {
          state.cart[index] = payload;
        }
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
