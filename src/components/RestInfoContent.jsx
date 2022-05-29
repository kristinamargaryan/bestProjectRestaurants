import React from "react";
import Rating from "./Rating";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import RoomIcon from "@mui/icons-material/Room";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function RestInfoContent(props) {
  let profilePhoto = `/restPhotos/rest_${props.rest.restName}_1.jpg`;
  return (
    <Paper
      sx={{
        p: 1,

        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 150, height: 150 }}>
            <Img alt="complex" src={profilePhoto} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography color="#2A2A2A" variant="h6" gutterBottom>
                {props.rest.restName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                <Rating />
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {props.rest.reserve}
                {props.rest.family}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="right"
                sx={{ cursor: "pointer" }}
                variant="body2"
              >
                <RoomIcon />
                {props.rest.adress}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {props.rest.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
