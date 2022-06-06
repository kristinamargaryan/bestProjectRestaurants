import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RestCity(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select style={{
          height:'100px',
        }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.city}
          onChange={props.handleChangeCity}
          autoWidth
          label="city"
        >
          <MenuItem value=""></MenuItem>
          <MenuItem style={{
          height:'30px'
        }} value="Yerevan">Yerevan</MenuItem>
          <MenuItem style={{
          height:'30px'
        }} value="Gyumri">Gyumri</MenuItem>
          <MenuItem style={{
          height:'30px'
        }} value="Vanadzor">Vanadzor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
