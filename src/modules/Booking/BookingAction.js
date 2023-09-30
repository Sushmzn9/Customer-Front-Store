import { toast } from "react-toastify";
import { getBookingData, postBooking } from "../../helper/axios";
import { setBooks } from "./BookingSlice";

export const getBookingAction = () => async (dispatch) => {
  try {
    const { status, data } = await getBookingData(); // Fetch booking data using the getBooking function.
    console.log(status);
    console.log(data); // Log the fetched data for debugging purposes.

    if (status === "success") {
      // If the status is "success," dispatch the setBooks action to store the data.
      dispatch(setBooks(data));
    }
  } catch (error) {
    // Handle any errors that occur during the request.
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
