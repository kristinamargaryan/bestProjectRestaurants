import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function PriceInfo(props) {
  let prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];
  return (
    <FormControl
      style={{
        border:'1px solid black',
        width:'500px'
        
      }}
    >
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {prices.map((item) => {
          return (
            <FormControlLabel
              onChange={props.changePriceInfo}
              value={item}
              control={<Radio />}
              label={item}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
