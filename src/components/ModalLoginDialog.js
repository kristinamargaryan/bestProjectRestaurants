import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function ModalLoginDialog({ currentUser }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login, signup, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [errorSignIn, setErrorSignIn] = useState("");
  const [loading, setLoading] = useState(false);
  const [signInUp, setSignInUp] = useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const goHome = () => navigate("/");
  const [forgotPass, setForgotPass] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmitreset(e) {
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setOpen(false);
      setSignInUp(false);
    } catch {
      setError("Falied to log in");
    }

    setLoading(false);
  }

  async function handleSubmitUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setErrorSignIn("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setOpen(false);
      setSignInUp(false);
    } catch {
      setErrorSignIn("Falied to create an account");
    }

    setLoading(false);
  }

  return (
    <Dialog
      style={{ padding: "15px" }}
      fullScreen={fullScreen}
      open
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {forgotPass
          ? "reset password"
          : signInUp
          ? "You can access it through the open field of your Page"
          : "register page"}
      </DialogTitle>
      <Button onClick={goHome}>Go Home</Button>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center" }}>
          <h1 style={{ padding: 0, margin: 0 }}>
            {!forgotPass ? (signInUp ? "Log In" : "Sign Up") : "reset password"}
          </h1>
        </DialogContentText>
        {message || error}
      </DialogContent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {!forgotPass ? (
          <>
            <input
              ref={emailRef}
              style={{ width: "80%", fontSize: "20px" }}
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              required
            />
            <input
              ref={passwordRef}
              style={{ width: "80%", fontSize: "20px" }}
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              required
            />
            {!signInUp ? (
              <input
                ref={passwordConfirmRef}
                required
                name="password"
                label="Password-Confirmation"
                type="password"
                id="password-Confirmation"
                autoComplete="new-password"
              />
            ) : null}
          </>
        ) : (
          <input
            ref={emailRef}
            style={{ width: "80%", fontSize: "20px" }}
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            required
          />
        )}
      </div>
      <DialogActions
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {!forgotPass ? (
          signInUp ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Button
                onClick={() => {
                  setForgotPass(true);
                  setMessage("");
                  setError("");
                }}
              >
                Forgot Password?
              </Button>
              <Button onClick={() => setSignInUp(!signInUp)}>
                Don't have an account? Sign Up
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                setSignInUp(!signInUp);
              }}
            >
              Go to Log In
            </Button>
          )
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                setSignInUp(true);
                setForgotPass(false);
                setError("");
                setMessage("");
              }}
            >
              Go to Log In
            </Button>
            <Button
              onClick={() => {
                setSignInUp(false);
                setForgotPass(false);
                setError("");
                setMessage("");
              }}
            >
              Don't have an account? Sign Up
            </Button>
          </div>
        )}
        <div>
          <Button
            onClick={
              !forgotPass
                ? signInUp
                  ? handleSubmit
                  : handleSubmitUp
                : handleSubmitreset
            }
            autoFocus
          >
            {!forgotPass ? (signInUp ? "Log In" : "Sign Up") : "reset password"}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
