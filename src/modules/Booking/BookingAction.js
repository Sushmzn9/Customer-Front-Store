import { toast } from "react-toastify";
import { getBooking, postBooking } from "../../helper/axios";
import { setBooks } from "./BookingSlice";

export const getBookingAction = () => async (dispatch) => {
  try {
    const { status, result } = await getBooking(); // Fetch booking data using the getBooking function.

    console.log(result); // Log the fetched data for debugging purposes.

    if (status === "success") {
      // If the status is "success," dispatch the setBooks action to store the data.
      dispatch(setBooks(result));
    }
  } catch (error) {
    // Handle any errors that occur during the request.
    console.error("Error fetching booking data:", error);
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
    /// fetch all the products
    dispatch(getBooking());
  }
};
