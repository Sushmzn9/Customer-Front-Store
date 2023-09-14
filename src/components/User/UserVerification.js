import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Spinner from "react-bootstrap/Spinner";
import { Alert, Container } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { postUserVerificationInfo } from "../../helper/axios";
import { toast } from "react-toastify";

const UserVerification = () => {
  const [queryStrings] = useSearchParams();
  const navigate = useNavigate();
  const c = queryStrings.get("c");
  const e = queryStrings.get("e");
  const [showSpinner, setShowSpinner] = useState(true);
  const [resp, setResp] = useState({});
  useEffect(() => {
    postUserVerificationInfo({ c, e }).then((resp) => {
      setResp(resp);
      setShowSpinner(false);
      toast[resp.status](resp.message);
      if (resp.status === "success") {
        navigate("/");
      }
    });
  }, [c, e, navigate]);

  return (
    <div>
      <main className="main mt-5">
        <Container>
          {showSpinner ? (
            <div className="mt-5 text-center ">
              <Spinner animation="border" variant="primary" className="fs-1" />
              <br />
              Please wait while account being verified...
            </div>
          ) : (
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp.message}
            </Alert>
          )}
        </Container>
      </main>
    </div>
  );
};
export default UserVerification;
