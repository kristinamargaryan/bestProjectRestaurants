import { useAuth } from "../AuthContext";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function MyRest(props) {
  const { currentUser, userRestParams, userRestPhotos, updater } = useAuth();

  useEffect(() => {
    updater();
  }, []);
  return (
    <>
      {userRestParams.restName ? (
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={userRestPhotos[0]} />
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
    </>
  );
}
//     <div>
//       {" "}
//       {userRestParams.length && (
//         <div>
//           {userRestParams.map((item) => (
//             <div
//               style={{
//                 display: "flex",
//               }}
//             >
//               <div>{item[0]}:</div>
//               <div>{item[1] + ""}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
