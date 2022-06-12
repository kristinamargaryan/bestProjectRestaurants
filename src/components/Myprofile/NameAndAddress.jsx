import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
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
      <TextField
        style={{
          width: "200px",
        }}
        size="small"
        id="outlined-multiline-flexible"
        placeholder={props.forLabel}
        multiline
        maxRows={4}
        value={props.info}
        onChange={props.handleChange}
      />
    </Box>
  );
}
