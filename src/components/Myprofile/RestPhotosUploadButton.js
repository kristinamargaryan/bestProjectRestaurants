import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import app, { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

const Input = styled("input")({
  display: "none",
});
//  const fetchPhotos= async ()=>{
//    const photoCollection=await db.collection('restaurantsPhoto').get()
//    console.log(photoCollection)

//  }
//  fetchPhotos()
export default function RestPhotoUploadButton() {
  const { currentUser } = useAuth();
  const [fileUrl, setFileUrl] = useState([]);
  const [photos, setPhotos] = useState([]);
  let count = 0;
  let urls = [];

  const onFileChange = async (e) => {
    for (let file of e.target.files) {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(currentUser.uid + count++);
      await fileRef.put(file);
      urls.push(await fileRef.getDownloadURL());
    }
    setFileUrl(urls);
  };
  useEffect(() => {
    if (fileUrl.length) {
      db.collection("restaurantsPhoto").doc(currentUser.uid).set({
        avatar: fileUrl,
      });
    }
  }, [fileUrl]);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <form>
          <Input
            onChange={onFileChange}
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />

          <Button size="small" variant="contained" component="span">
            Upload photos
          </Button>

          <div>Uploded Photos {fileUrl.length}</div>
          {fileUrl.map((url) => (
            <img
              style={{
                height: "20px",
                width: "40px",
              }}
              src={url}
              alt=""
            />
          ))}
        </form>
      </label>
    </Stack>
  );
}
