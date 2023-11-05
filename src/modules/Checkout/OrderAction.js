import { getOrderData } from "../../helper/axios";
import { setorder } from "./OrderSlice";

export const getOrderAction = (orderNumber) => async (dispatch) => {
  console.log(orderNumber);
  const { status, data } = await getOrderData(orderNumber);
  console.log(data);
  if (status === "success") {
    dispatch(setorder(data));
  }
};
