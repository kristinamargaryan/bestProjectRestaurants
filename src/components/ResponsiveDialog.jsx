import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [logOrSignin, setLogOrSignin] = useState("/Forbusiness");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const goToLogin = () => {
    setOpen(!open);
  };

  const goToSignin = () => {
    setOpen(!open);
  };
  const again = () => {
    setOpen(!open);
  };
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={again}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"lav hnaravorutyun ete uneq bizmessssss"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ete arden uneq acc mer mot Login ete chuneq sign in
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/Signup"
          >
            <Button autoFocus onClick={goToSignin}>
              Sign in
            </Button>
          </Link>
          <Link to="/Signin">
            {" "}
            <Button onClick={goToLogin} autoFocus>
              Login
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
