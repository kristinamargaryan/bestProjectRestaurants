import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function BtnSend(props) {
  let enableSendButton = () => {
    for (let key in props.data) {
      if (props.data[key] && props.data[key].length === 0) {
        return true;
      }
    }
    return false;
  };
  return (
    <Stack
      style={{
        justifyContent: "right",
      }}
      direction="row"
      spacing={2}
    >
      <Button
        disabled={enableSendButton()}
        onClick={props.savechanges}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Stack>
  );
}
