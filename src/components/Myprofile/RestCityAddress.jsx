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
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          value={props.address}
          onChange={props.handleChangeAddress}
        />
      </div>
    </Box>
  );
}
