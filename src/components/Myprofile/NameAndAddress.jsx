import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function RestCityAddress(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          size="small"
          id="outlined-multiline-flexible"
          label={props.forLabel}
          multiline
          maxRows={4}
          value={props.info}
          onChange={props.handleChange}
        />
      </div>
    </Box>
  );
}
