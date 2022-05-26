import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";



export default function RestTypesOptionsMoods(props) {

  return (
    <div style={{
      width:'30%'
    }} className={props.name}>
      <h4>Select {props.name} your Restourant </h4>

      <div className="title"></div>
      {props.list.map((x, i) => (
        <label key={i}>
          <input
            type="checkbox"
            value={x.value}
            onChange={props.handleChange}
          />{" "}
          {x.label}
        </label>
      ))}

      <div style={{
        backgroundColor:'yellow'
      }}>
        Selected Types: {props.type.length ? props.type.join(", ") : null}
      </div>
    </div>
  );
}
