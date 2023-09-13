import { toast } from "react-toastify";
import { postUserSignUp } from "../../helper/axios";

export const postUserSignUpAction = async (obj) => {
  const pendingResp = await postUserSignUp(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  console.log(token);
  toast[status](message);
};
