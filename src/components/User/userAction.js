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

  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
    dispatch(getUserProfileAction());
  }
};

export const getUserProfileAction = () => async (dispatch) => {
  const { status, user } = await getUserInfo();

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
