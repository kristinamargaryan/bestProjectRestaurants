import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function BtnSend(props) {
  return (
    <Stack style={{
       justifyContent:'right'
    }} direction="row" spacing={2}>
      <Button onClick={props.savechanges} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
