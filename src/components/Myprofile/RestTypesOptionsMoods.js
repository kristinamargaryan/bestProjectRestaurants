import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { useAuth } from "../AuthProvider";

export default function RestTypesOptionsMoods(props) {
  let [bul, setBul] = useState(false);

  
  const { currentUser, userRestParams, userRestPhotos } = useAuth();
  return (
    <div style={{}} className={props.name}>
      <h3
        style={{
          margin: "2px",
        }}
      >
        Select {props.name}{" "}
      </h3>

      <div className="title"></div>
      {props.list.map((item, index) => (
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'left',
          }}
          key={index}
        >
          <input
            checked={props.type.includes(item.value) ? true : false}
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
          marginBottom: '5px',
        }}
      >
        Selected Types: {props.type.length ? props.type.join(", ") : null}
      </div>
    </div>
  );
}
