import React from "react";
import ResponsiveDialog from "../components/ResponsiveDialog";
import Myprofile from "./Myprofile";
import { Route } from "react-router-dom";
import MyRest from "./MyRest";
import { useAuth } from "../contexts/AuthContext";
import ModalLoginDialog from "../components/ModalLoginDialog";
import styled from "@emotion/styled";

const MyDiv = styled.div`
  background-image: url(https://static01.nyt.com/images/2020/03/03/well/physed-foods/physed-foods-mobileMasterAt3x.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-y: center;
`;

export default function ForBisness() {
  const { currentUser } = useAuth();
  return (
    <>
      {!currentUser && (
        <MyDiv>
          <ModalLoginDialog />
        </MyDiv>
      )}
      {!!currentUser && <Myprofile />}
    </>
  );
}
