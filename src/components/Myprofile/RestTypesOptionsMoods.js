import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";



export default function RestTypesOptionsMoods(props) {

  return (
    <div style={{
      
      
    }} className={props.name}>
      <h3 style={{
        margin:'2px',
        textAlign:'center'
      }}>Select {props.name}  </h3>

      <div className="title"></div>
      {props.list.map((x, i) => (
        <label style={{
          fontFamily:'sans-serif'
        }} key={i}>
          <input
            type="checkbox"
            value={x.value}
            onChange={props.handleChange}
          />{" "}
          {x.label}
        </label>
      ))}

      <div style={{
        backgroundColor:'#318CE7',
        marginTop:'5px'
      }}>
        Selected Types: {props.type.length ? props.type.join(", ") : null}
      </div>
    </div>
  );
}
