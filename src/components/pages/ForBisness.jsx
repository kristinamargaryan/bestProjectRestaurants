import React from "react";
import Myprofile from "./Myprofile";
import { useAuth } from "../AuttProvider";
import ModalLoginDialog from "../ModalLogin";
import styled from "@emotion/styled";

const MyDiv = styled.div`
  background-image: url(https://static01.nyt.com/images/2020/03/03/well/physed-foods/physed-foods-mobileMasterAt3x.jpg);
  width: 100%;
  height: calc(100vh - 56px);
  background-repeat: no-repeat;
  background-position-y: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
