import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import * as uuid from "uuid";
export default function PriceInfo(props) {
  let prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];
  return (
    <FormControl style={{}}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {prices.map((item) => {
          return (
            <FormControlLabel
              key={uuid.v4()}
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
