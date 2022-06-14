import { TextField, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SIGNIN_ROUTE } from "../../constants/constants";
import { useAuth } from "../AuthProvider";
import Alert from "@mui/material/Alert";

const ResetSection = styled.div`
  width: 100%;
  height: calc(100vh - 275px);
  background-color: #17c0eb;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResetArea = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  width: "300px";
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default function ForgotPasswordPage() {

  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Falied to reset password");
    }
    setLoading(false);
  }

  return (
    <ResetSection>
      <div>
        <ResetArea>
          <h2>Reset Password</h2>
          <div
            style={{
              fontSize: "18px",
              marginBottom: "15px",
              fontFamily: "Times new roman",
            }}
          >
            In this field you can reset your password
          </div>
          {message ? (
            <Alert
              style={{ marginBottom: "15px", width: "100%", padding: "0 10px" }}
              fullWidth
              severity="success"
            >
              {message}
            </Alert>
          ) : error ? (
            <Alert
              style={{ marginBottom: "15px", width: "100%", padding: "0 10px" }}
              fullWidth
              severity="error"
            >
              {error}
            </Alert>
          ) : null}
          <TextField
            inputRef={emailRef}
            type="email"
            fullWidth
            variant="outlined"
            label="Reset-Password *"
            style={{ marginBottom: "15px" }}
          />
          <Button
            style={{ marginBottom: "15px" }}
            fullWidth
            variant="contained"
            onClick={handleSubmit}
          >
            Reset Password
          </Button>

          <div
            style={{
              color: "#17c0eb",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate(SIGNIN_ROUTE)}
          >
            {" "}
            Sign In
          </div>
        </ResetArea>
      </div>
    </ResetSection>
  );
}


