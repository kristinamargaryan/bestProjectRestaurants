import React from "react";
import AllParams from "../components/AllParams";
import RestTypes from "../components/RestTypes";
import AllRestInfoContent from "../components/AllRestInfoContent";
export default function Homepage(props) {
  return (
    <>
      {" "}
      <AllParams allParams={props.allParams} />
      <div className="homeflex">
        <RestTypes />
        <AllRestInfoContent rests={props.rests} />
      </div>
    </>
  );
}
