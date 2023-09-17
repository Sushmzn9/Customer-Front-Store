import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;

const catAPI = rootAPI + "/category";
const admiAPI = rootAPI + "/admin";
const proAPI = rootAPI + "/product";
const userAPI = rootAPI + "/user";
const paymentAPI = rootAPI + "/payment";

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
  console.log(process.env.REACT_APP_ROOTAPI);
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
