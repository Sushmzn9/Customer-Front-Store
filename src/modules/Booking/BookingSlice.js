import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
      console.log(payload, "payload booking");
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBooks } = actions;
export default reducer;
