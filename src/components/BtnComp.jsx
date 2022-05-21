import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BtnComp(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button style={{
        color:'black',
        marginLeft:'5px',
        marginRight:'5px',
        
      }}  className='btn' size='small' color='inherit' variant="outlined">{props.title}</Button>
      
    </Stack>
  );
}