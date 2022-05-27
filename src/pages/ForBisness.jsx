import React from "react";
import ResponsiveDialog from "../components/ResponsiveDialog";
import Myprofile from "./Myprofile";
import { Route } from "react-router-dom";
import MyRest from "./MyRest";

export default function ForBisness(props) {
  return (
    <>
     
      {props.currentUser ? <Myprofile /> : <ResponsiveDialog />}
    </>
  );
}
