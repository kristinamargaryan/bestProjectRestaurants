import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import app from "../../firebase";

const Input = styled("input")({
  display: "none",
});

export default function RestPhotoUploadButton() {
  // const onFileChange = (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   fileRef.put(file).then(() => {
  //     console.log("ok", file.name);
  //   });
  // };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          // onChange={onFileChange}
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload 3 photos
        </Button>
      </label>
    </Stack>
  );
}
