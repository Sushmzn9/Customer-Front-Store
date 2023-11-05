import React, { useState } from "react";
import { toast } from "react-toastify";
import { PasswordOTP } from "./PasswordOTP";
import { PasswordReset } from "./ResetForm";
import { requestPassOTP, resetPass } from "../../helper/axios";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [form, setForm] = useState("otp");

  const [resp, setResp] = useState({});

  const handleOnOtpRequest = async (email) => {
    setEmail(email);
    console.log(email);
    if (!email.includes("@") && !email.includes(".")) {
      return toast.error("Invalid email");
    }
    const pending = requestPassOTP(email);
    toast.promise(pending, {
      pending: "please wait....",
    });

    const result = await pending;
    if (result.status === "success") {
      setResp(result);
      setForm("reset");
    } else {
      toast.error(result.message);
    }
  };
  const processResetPassAPI = async (obj) => {
    console.log(obj, email);
    const pending = resetPass({ ...obj, email });
    toast.promise(pending, {
      pending: "Please wait...",
    });

    const { status, message } = await pending;
    toast[status](message);

    status === "success" && navigate("/");
  };

  const forms = {
    otp: <PasswordOTP handleOnOtpRequest={handleOnOtpRequest} />,
    reset: (
      <PasswordReset
        setForm={setForm}
        processResetPassAPI={processResetPassAPI}
      />
    ),
  };

  return (
    <>
      <main className="main pt-5">
        {resp.message && (
          <div
            className={
              resp.status === "success"
                ? "text-center border p-2 bg-green-600"
                : "text-center border p-2 bg-red-600"
            }
          >
            {resp.message}
          </div>
        )}
        <div className="d-flex reset-pass">
          {/* requeset opt form */}
          {forms[form]}

          {/* rest password form  */}
        </div>
      </main>
    </>
  );
};
