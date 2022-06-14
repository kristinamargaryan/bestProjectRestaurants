import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const cities = [
  { title: 'Yerevan' },
  { title: 'Vanadzor' },
  { title: 'Gyumri' },
  { title: 'Abovyan' },
  { title: 'Agarak' },
  { title: 'Alaverdi' },
  { title: 'Axtala' },
  { title: 'Ayrum' },
  { title: 'Ashtarak' },
  { title: 'Aparan' },
  { title: 'Ararat' },
  { title: 'Artik' },
  { title: 'Armavir' },
  { title: 'Artashat' },
  { title: 'Berd' },
  { title: 'Byureghavan' },
  { title: 'Gavar' },
  { title: 'Goris' },
  { title: 'Dastakert' },
  { title: 'Dilijan' },
  { title: 'Eghegnadzor' },
  { title: 'Eghvard' },
  { title: 'Talin' },
  { title: 'Tumanyan' },
  { title: 'Ijevan' },
  { title: 'Tsaghkadzor' },
  { title: 'Kapan' },
  { title: 'Hrazdan' },
  { title: 'Jhambarak' },
  { title: 'Masis' },
  { title: 'Maralik' },
  { title: 'Martuni' },
  { title: 'Metsamor' },
  { title: 'Meghri' },
  { title: 'Nor Hajn' },
  { title: 'Nyjemberyan' },
  { title: 'Shamlugh' },
  { title: 'Charencavan' },
  { title: 'Jermuk' },
  { title: 'Sisian' },
  { title: 'Spitak' },
  { title: 'Stepanavan' },
  { title: 'Sevan' },
  { title: 'Vayq' },
  { title: 'Vardenis' },
  { title: 'Vedi' },
  { title: 'Tashir' },
  { title: 'Qajaran' },
]

export default function RestCity(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%', margin: '0 0 10px 0',}}>
        <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select style={{
          maxheight: '100px',
          minWidth: '100%',
        }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.city}
          onChange={props.handleChangeCity}
          autoWidth
          label="City"
        >
          {cities.map((elem) => <MenuItem style={{
            height: '30px', 
            padding: '0 30px',
          
          }} value={elem.title}>{elem.title}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}
