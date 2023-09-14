import { toast } from "react-toastify";
import {
  getNewAccessJWT,
  getUserInfo,
  postUserSignUp,
  signInUser,
} from "../../helper/axios";
import { setUser } from "./userSlice";

export const postUserSignUpAction = async (obj) => {
  const pendingResp = await postUserSignUp(obj);
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const signInUserAction = (obj) => async (dispatch) => {
  const pendingResp = signInUser(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  console.log(token);
  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
    dispatch(getUserProfileAction());
  }
  //get the user data and mount in the state
};

//get admin profile
export const getUserProfileAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, user } = await getUserInfo();
  //mount the state with the user data
  console.log(user);
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const autoLogin = () => async (dispatch) => {
  // check if accessJWT exist in session

  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    return dispatch(getUserProfileAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    // request new accessJWT from server and all getAdminProfile

    const { accessJWT } = await getNewAccessJWT();

    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getUserProfileAction());
    }
  }
};
