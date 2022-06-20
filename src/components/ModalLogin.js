import * as React from "react";
import Button from "@mui/material/Button";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import styled from "@emotion/styled";
import {BigDiv, MyInput, TitleDiv, GoHomeBtn, 
  LogTitle, InputArea, ButtonPart, PartBtn, LogBtn} from '../components/CssFolder/ModalLoginCss'
import{HOMEPAGE_ROUTE } from "../constants/constants";


export default function ModalLoginDialog() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login, signup, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signInUp, setSignInUp] = useState(true);
  const navigate = useNavigate();
  const goHome = () => navigate(HOMEPAGE_ROUTE);
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
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setSignInUp(false);
    } catch {
      setError("Falied to create an account");
    }

    setLoading(false);
  }

  const BigDiv = styled.div`
    padding: 10px;
    width: 460px;
    background-color: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 768px) {
      width: calc(100% - 20px);
      height: 48%;
    }
  `;

  const MyInput = styled.input`
    width: 80%;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border: none;
    outline: 1px solid gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      outline: 1px solid #fff;
    }
  `;

  const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    padding-bottom: 10px;
  `;

  const GoHomeBtn = styled.button`
    cursor: pointer;
    color: #fff;
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 20px;
  `;

  const LogTitle = styled.div`
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 30px;
    text-align: center;
  `;

  const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  `;

  const ButtonPart = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const PartBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `;

  const LogBtn = styled.div`
    display: flex;
    align-self: flex-end;
  `;

  return (
    <BigDiv>
      <TitleDiv>
        {forgotPass
          ? "With this field you can recover a forgotten password"
          : signInUp
          ? "You can access it through the open field of your Page"
          : "You can register through the field opened on our website"}
      </TitleDiv>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GoHomeBtn onClick={goHome}>Go Home</GoHomeBtn>
      </div>
      <div>
        <LogTitle>
          {!forgotPass ? (signInUp ? "Log In" : "Sign Up") : "Reset Password"}
        </LogTitle>
      </div>
      <div style={{ color: "green", textAlign: "center" }}>{message}</div>
      <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      <InputArea>
        {!forgotPass ? (
          <>
            <MyInput
              ref={emailRef}
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              required
            />
            <MyInput
              ref={passwordRef}
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              required
            />
            {!signInUp ? (
              <MyInput
                ref={passwordConfirmRef}
                required
                name="password"
                placeholder="Password-Confirmation"
                type="password"
                id="password-Confirmation"
                autoComplete="new-password"
              />
            ) : null}
          </>
        ) : (
          <MyInput
            ref={emailRef}
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            required
          />
        )}
      </InputArea>
      <ButtonPart>
        {!forgotPass ? (
          signInUp ? (
            <PartBtn>
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
            </PartBtn>
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
          <PartBtn>
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
          </PartBtn>
        )}
        <LogBtn>
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
        </LogBtn>
      </ButtonPart>
    </BigDiv>
  );
}
