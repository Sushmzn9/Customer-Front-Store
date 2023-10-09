import { toast } from "react-toastify";
import { getBookingData, postBooking } from "../../helper/axios";
import { setBooks } from "./BookingSlice";

export const getBookingAction = () => async (dispatch) => {
  try {
    const { status, data } = await getBookingData();

    if (status === "success") {
      dispatch(setBooks(data));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const postBookAction = (data) => async (dispatch) => {
  const pending = postBooking(data);

  toast.promise(pending, {
    pending: "Please wait",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getBookingData());
  }
};
