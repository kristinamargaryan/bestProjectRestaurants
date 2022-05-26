import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

export default function PriceInfo(props) {
    
  return (
    <FormControl >
      <FormLabel  id="demo-row-radio-buttons-group-label">Expensive</FormLabel>
      <RadioGroup 
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={props.changePriceInfo} value="$" control={<Radio />} label="$" />
        <FormControlLabel onChange={props.changePriceInfo} value="$$" control={<Radio />} label="$$" />
        <FormControlLabel onChange={props.changePriceInfo} value="$$$" control={<Radio />} label="$$$" />
        <FormControlLabel onChange={props.changePriceInfo} value="$$$$" control={<Radio />} label="$$$$" />
        <FormControlLabel onChange={props.changePriceInfo} value="$$$$$" control={<Radio />} label="$$$$$" />
        
      </RadioGroup>
    </FormControl>
  );
}
