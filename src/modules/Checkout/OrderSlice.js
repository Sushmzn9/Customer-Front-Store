import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setorder: (state, { payload }) => {
      state.order = payload;
    },
  },
});

const { reducer, actions } = orderSlice;
export const { setorder } = actions;
export default reducer;
