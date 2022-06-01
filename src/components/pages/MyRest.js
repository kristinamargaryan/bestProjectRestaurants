import { useAuth } from "../AuthContext";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

// import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function MyRest(props) {
  const {
    currentUser,
    userRestParams,
    userRestPhotos,
    profilePicture,
    updater,
    updaterAll,
  } = useAuth();

  useEffect(() => {
    updater();
  }, [profilePicture]);

  let deletePhoto = (ev) => {
    ev.preventDefault();
    db.collection("restaurantsPhoto")
      .doc(currentUser.uid)
      .set({
        avatar: userRestPhotos.filter((item, index) => {
          return index != ev.target.id;
        }),
        profilePicture:
          ev.target.id > profilePicture
            ? profilePicture
            : profilePicture == 0
            ? profilePicture
            : profilePicture - 1,
      });
    updater();
    updaterAll();
  };
  let profilePhotoSet = (ev) => {
    db.collection("restaurantsPhoto").doc(currentUser.uid).set({
      avatar: userRestPhotos,
      profilePicture: ev.target.id,
    });

    updater();
    updaterAll();
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {Object.keys(userRestPhotos).length !== 0 ? (
        <div
          style={{
            width: "50%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {userRestPhotos.map((item, index) => (
            <div>
              <img
                style={{
                  cursor: "pointer",
                  width: "200px",
                  height: "150px",
                  objectFit: "cover",
                }}
                id={index}
                onClick={profilePhotoSet}
                src={userRestPhotos[index]}
                className="sliderimg"
                alt=""
              />
              <div
                id={index}
                onClick={deletePhoto}
                style={{
                  margin: "0 auto",
                  cursor: "pointer",
                  width: "5%",
                }}
              >
                x
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {userRestParams.restName ? (
        <Paper
          sx={{
            p: 2,

            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 300, height: 300 }}>
                <Img alt="complex" src={userRestPhotos[profilePicture]} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {userRestParams.restName}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {userRestParams.city + " " + userRestParams.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userRestParams.moods + ""}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    {userRestParams.options + ""}
                  </Typography>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    {userRestParams.foodTypes + ""}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {userRestParams.priceInfo}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : null}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }} */}
      {/* > */}

      {/* </div> */}
    </div>
  );
}
