import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SizeCheckboxes() {
  let [checked, setChecked] = useState(false);
  let changeCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <Checkbox
        onChange={changeCheckbox}
        checked={checked}
        {...label}
        defaultChecked
        size="small"
      />
    </div>
  );
}
