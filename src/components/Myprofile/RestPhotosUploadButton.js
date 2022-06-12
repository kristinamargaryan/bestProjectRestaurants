import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import app, { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import LoadingButton from "@mui/lab/LoadingButton";
import * as uuid from "uuid";
const Input = styled("input")({
  display: "none",
});

export default function RestPhotoUploadButton(props) {
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const onFileChange = async (e) => {
    let urls = [];

    setLoading(false);
    for (let file of e.target.files) {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(uuid.v4());
      await fileRef.put(file);
      urls.push(await fileRef.getDownloadURL());
    }
    props.fileUrl
      ? props.newUrls(props.fileUrl.concat(urls))
      : props.newUrlsmenu(props.fileUrlmenu.concat(urls));
  };
  useEffect(() => {
    
    props.fileUrl && setLoading(true);
  }, [props.fileUrl]);
  useEffect(() => {
   
    props.fileUrlmenu && setLoading(true);
  }, [props.fileUrlmenu]);

  return (
    <Stack style={{
      margin:'5px'
    }} direction="row" alignItems="center" spacing={2}>
      <label htmlFor={props.fileUrl ? "restPhotos" : "menuPhotos"}>
        <form>
          <Input
            onChange={onFileChange}
            accept="image/*"
            id={props.fileUrl ? "restPhotos" : "menuPhotos"}
            multiple
            type="file"
          />

          {loading ? (
            <Button size="small" variant="contained" component="span">
              {props.title}
            </Button>
          ) : (
            <Stack direction="row" spacing={2}>
              <LoadingButton loading variant="outlined">
                Submit
              </LoadingButton>
            </Stack>
          )}
        </form>
      </label>
      {props.fileUrl
        ? props.fileUrl.map((url) => (
            <img
              style={{
                margin: "3px",
                height: "10px",
                width: "10px",
              }}
              src={url}
              alt=""
            />
          ))
        : props.fileUrlmenu.map((url) => (
            <img
              style={{
                margin: "3px",
                height: "10px",
                width: "10px",
              }}
              src={url}
              alt=""
            />
          ))}
    </Stack>
  );
}
