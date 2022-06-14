import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import BtnComp from "./BtnComp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuttProvider";
import{HomePage_Route, About_Route, ContactUs_Route, Forbusiness_Route, ForbusinessMyrest_Route} from "./constants/constants";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userHave, setUserHave] = useState(false);
  const navigate = useNavigate();

  const dashboard = () => navigate(currentUser.email);
  const myrest = () => navigate(ForbusinessMyrest_Route);
  const { currentUser, userRestParams, userRestPhotos } = useAuth();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <div onClick={myrest}>Settings</div>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <div onClick={dashboard}>Profile</div>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <IconButton
        onClick={myrest}
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
        <p>Settings</p>
      </IconButton>
      <IconButton
        onClick={dashboard}
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
        <p>Profile</p>
      </IconButton>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: "none", sm: "block" } }}
          >
            {" "}
            <Link to={HomePage_Route}>
              <img
                className="imgg"
                style={{
                  width: "80px",
                  height: "50px",
                  objectPosition: "center",
                }}
                src="https://clipart.world/wp-content/uploads/2020/08/restaurant-logo-with-red-chef-hat-png-transparent.png"
                alt=""
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Link
            style={{
              textDecoration: "none",
            }}
            to={About_Route}
          >
            <BtnComp title={"About"}></BtnComp>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            to={ ContactUs_Route}
          >
            <BtnComp title={"Contact Us"}></BtnComp>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            to={Forbusiness_Route}
          >
            <BtnComp
              title={
                (Object.keys(userRestParams).length > 0 ||
                  Object.keys(userRestPhotos).length > 0) &&
                currentUser
                  ? "Edit"
                  : "For business "
              }
            ></BtnComp>
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!!currentUser ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : null}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {!!currentUser ? <MoreIcon /> : null}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {!!currentUser ? (
        <>
          {renderMobileMenu}
          {renderMenu}
        </>
      ) : null}
    </Box>
  );
}
