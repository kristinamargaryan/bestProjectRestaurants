import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CallIcon from "@mui/icons-material/Call";
import RestaurantInfoDialogTopPart from "./RestaurantInfoDialogTopPart";

export default function RestaurantInfoDialog(props) {
  const [scroll, setScroll] = useState("paper");
  const [showMenu, setShowMenu] = useState(false);
  const { data } = props;
  console.log("data", data);

  return (
    <div>
      <Button>scroll=paper</Button>
      <Dialog
        open
        onClose={props.onclose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            fontSize: "25px",
            letterSpacing: "3px",
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {data.restName}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <RestaurantInfoDialogTopPart data={data} />
            <div style={{ marginBottom: "10px" }}>
              <div style={{ color: "#000", fontSize: "22px" }}>
                <span style={{ color: "green" }}>Moods: </span>{" "}
                {data.moods.join(", ")}
              </div>
              <div style={{ color: "#000", fontSize: "22px" }}>
                <span style={{ color: "green" }}>Options: </span>{" "}
                {data.options.join(", ")}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                style={{ minWidth: "100px" }}
                onClick={() => setShowMenu(true)}
                variant="contained"
              >
                Menu
              </Button>
              <Button
                style={{ minWidth: "100px" }}
                onClick={() => setShowMenu(false)}
                variant="contained"
              >
                Gallary
              </Button>
              <Button style={{ minWidth: "100px" }} variant="contained">
                Opinion
              </Button>
            </div>
            {showMenu && (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {data.photos.menuPhotos.map((e) => (
                  <img
                    style={{ width: "160px", margin: "5px", height: "160px" }}
                    src={e}
                  />
                ))}
              </div>
            )}
            {!showMenu && (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {data.photos.avatar.map((e) => (
                  <img
                    style={{ width: "160px", margin: "5px", height: "160px" }}
                    src={e}
                  />
                ))}
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onclose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
