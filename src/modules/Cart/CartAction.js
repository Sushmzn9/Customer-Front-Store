import { setCart } from "./CartSlice";

export const getCartData = () => (dispatch) => {
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(carts);
  setCart(carts);
};
