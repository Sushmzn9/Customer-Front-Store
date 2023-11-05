import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;

const catAPI = rootAPI + "/category";
const admiAPI = rootAPI + "/admin";
const proAPI = rootAPI + "/product";
const userAPI = rootAPI + "/user";
const paymentAPI = rootAPI + "/payment";
const bookAPI = rootAPI + "/book";
const orderAPI = rootAPI + "/order";
const stripeAPI = rootAPI + "/create-payment-intent";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const getNewAccessJWT = () => {
  const obj = {
    method: "get",
    url: admiAPI + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcesor(obj);
};
const axiosProcesor = async ({ method, url, obj, isPrivate, refreshToken }) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();

  const headers = {
    Authorization: isPrivate ? token : null,
  };

  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });

    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === "jwt expired"
    ) {
      //1. get new accessJWt
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success" && accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }

      //2. continue the request

      return axiosProcesor({ method, url, obj, isPrivate, refreshToken });
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

export const getCategories = (_id) => {
  const obj = {
    method: "get",
    url: _id ? catAPI + "/" + _id : catAPI,
  };

  return axiosProcesor(obj);
};

export const getProductCategoriesById = ({ _id }) => {
  const obj = {
    method: "get",
    url: proAPI + "/category/" + _id,
  };
  return axiosProcesor(obj);
};

export const getProduct = (_id) => {
  const obj = {
    method: "get",
    url: _id ? proAPI + "/" + _id : proAPI,
  };
  return axiosProcesor(obj);
};

// customer signin

export const postUserSignUp = (data) => {
  const obj = {
    method: "post",
    url: userAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};
export const postUserVerificationInfo = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/user-verification",
    obj: data,
  };
  return axiosProcesor(obj);
};

export const signInUser = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/sign-in",
    obj: data,
  };
  return axiosProcesor(obj);
};

export const getUserInfo = () => {
  const obj = {
    method: "get",
    url: userAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const logoutUser = (_id) => {
  const obj = {
    method: "post",
    url: userAPI + "/logout",
    obj: {
      _id,
      accessJWT: getAccessJWT(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcesor(obj);
};

// payment api
export const getPaymentInfo = (_id) => {
  const obj = {
    method: "get",
    url: _id ? paymentAPI + "/" + _id : paymentAPI,
  };
  return axiosProcesor(obj);
};

//booking slot
export const getBookingData = () => {
  const obj = {
    method: "get",
    url: bookAPI,
  };
  return axiosProcesor(obj);
};

export const postBooking = (data) => {
  const obj = {
    method: "post",
    url: bookAPI,
    obj: data,
  };

  return axiosProcesor(obj);
};

//stripe payment
export const postStripePayment = (data) => {
  const obj = {
    method: "post",
    url: stripeAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

//reset pass
export const requestPassOTP = (email) => {
  const obj = {
    method: "post",
    url: userAPI + "/request-otp",
    obj: { email },
  };
  return axiosProcesor(obj);
};

export const resetPass = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/reset-password",
    obj: data,
  };
  return axiosProcesor(obj);
};

//post order
export const postOrder = (data) => {
  const obj = {
    method: "post",
    url: orderAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

//get order list

export const getOrderData = (orderNumber) => {
  console.log(orderNumber);
  const obj = {
    method: "get",
    url: orderNumber ? orderAPI + "/" + orderNumber : orderAPI,
  };
  return axiosProcesor(obj);
};
