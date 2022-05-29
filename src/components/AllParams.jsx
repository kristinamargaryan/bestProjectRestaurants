import React from "react";
import Checkboxes from "./Checkboxes.jsx";
import BtnComp from "./BtnComp.jsx";

export default function allParams(props) {
  return (
    <div className="filtercss">
      <div className="filtercss">
        {props.allParams.map((teg, index) => {
          console.log("a");
          return (
            <div className="checkboxdiv">
              {teg}
              <Checkboxes />
            </div>
          );
        })}
        <div className="filtercss">
          <BtnComp title="Search" />
          <BtnComp title="Reset" />
        </div>
      </div>
    </div>
  );
}
