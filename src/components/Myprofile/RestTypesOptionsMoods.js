import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { useAuth } from "../AuthContext";

export default function RestTypesOptionsMoods(props) {
  let [bul, setBul] = useState(false);
  const { currentUser, userRestParams, userRestPhotos } = useAuth();
  // console.log(userRestParams,props.list)
  //  let  wrapper=()=>{
  //   setBul(!bul)
  //   props.handleChange
  //   }
  return (
    <div style={{}} className={props.name}>
      <h3
        style={{
          margin: "2px",
          textAlign: "center",
        }}
      >
        Select {props.name}{" "}
      </h3>

      <div className="title"></div>
      {props.list.map((item, index) => (
        <label
          style={{
            fontFamily: "sans-serif",
          }}
          key={index}
        >
          <input
            // checked={bul}
            type="checkbox"
            value={item.value}
            onChange={props.handleChange}
          />{" "}
          {item.label}
        </label>
      ))}

      <div
        style={{
          backgroundColor: "#318CE7",
          marginTop: "5px",
        }}
      >
        Selected Types: {props.type.length ? props.type.join(", ") : null}
      </div>
    </div>
  );
}
