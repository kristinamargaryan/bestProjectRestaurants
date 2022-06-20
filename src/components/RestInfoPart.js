import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DeleteIcon from "@mui/icons-material/Delete";
import useWindowDimensions from "./WindowResize";
import {
  MyRestaurantsGallaryPhotos,
  MyRestaurantsMenuPhotos,
} from "./MyRestaurantsLeftRightPhoto";
import CreateEditRestaurantDialog from "./CreateEditRestaurantDialog";

export default function RestInfoPart(props) {
  const [restaurant, setRestaurant] = useState(
    JSON.parse(sessionStorage.getItem("restinfo"))
  );
  
  const [showDialog, setShowDialog] = useState(false)
  const { width } = useWindowDimensions();

  const {
    address,
    city,
    priceInfo,
    restName,
    phoneNumber,
    id,
    foodTypes,
    moods,
    options,
    photos,
  } = restaurant;

  const newAddress = city + " " + address;
  const icons = [
    [
      <RestaurantIcon style={{ color: "#59C882", fontSize: "25px" }} />,
      restName,
    ],
    [
      <AttachMoneyIcon style={{ color: "#59C882", fontSize: "25px" }} />,
      priceInfo,
    ],
    [
      <LocationOnIcon style={{ color: "#59C882", fontSize: "25px" }} />,
      newAddress,
    ],
    [<CallIcon style={{ color: "#59C882", fontSize: "25px" }} />, phoneNumber],
  ];

  const showCreateEditDialog = () => {
    setShowDialog(!showDialog)
  }
  return (
    <Box
      sx={{
        display: "flex",
        // flexWrap: "wrap",
        flexDirection: width <= 935 ? "column" : "row",
        justifyContent: "center",
        alignItems: width > 935 ? "flex-start" : "center",

        "& > :not(style)": {
          m: 1,
          width: width <= 1130 ? (width <= 935 ? 450 : 350) : 450,
          height: "auto",
          padding: 10,
        },
      }}
    >
      {width > 935 && <MyRestaurantsGallaryPhotos data={restaurant} />}

      <Paper
        style={{
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxHeight: "950px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={photos.avatar[photos.profilePicture]}
            style={{
              width:
                width <= 1130 ? (width <= 922 ? "450px" : "350px") : "450px",
              height: width <= 1130 ? "200px" : "300px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              zIndex: "2",
            }}
            onClick={showCreateEditDialog}
          >
            <EditIcon
              style={{
                fontSize: "40px",
                color: "#59C882",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        {showDialog && <CreateEditRestaurantDialog data={restaurant}  onclick={showCreateEditDialog} />}
        {icons.map((e) => {
          return (
            <div
              style={{
                fontSize: "30px",
                padding: "15px 0",
                fontFamily: "roboto",
                fontWeight: "800",
                display: "flex",
                alignItems: "center",
                height: "30px",
              }}
            >
              <div>{e[0]}</div>
              <div>{e[1]}</div>
            </div>
          );
        })}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "30px",
              padding: "15px 0",
              fontFamily: "roboto",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
              height: "30px",
            }}
          >
            {" "}
            <DinnerDiningIcon
              style={{ color: "#59C882", fontSize: "25px" }}
            />{" "}
            {foodTypes.length === 1 ? (
              <span>{foodTypes[0]}</span>
            ) : (
              <span>{foodTypes.join(", ")}</span>
            )}
          </div>

          <ul
            style={{
              display: "flex",
              padding: "0",
              flexWrap: "wrap",
              marginBottom: "15px",
            }}
          >
            <span style={{ fontSize: "30px", color: "#59C882" }}>Moods: </span>{" "}
            {moods.map((e) => (
              <li key={e} style={{ fontSize: "30px" }}>
                {e + ", "}
              </li>
            ))}
          </ul>
          <ul style={{ display: "flex", padding: "0", flexWrap: "wrap" }}>
            <span style={{ fontSize: "30px", color: "#59C882" }}>
              Options:{" "}
            </span>{" "}
            {options.map((e) => (
              <li key={e} style={{ fontSize: "30px" }}>
                {e + ", "}
              </li>
            ))}
          </ul>
        </div>
      </Paper>
      {width > 935 && <MyRestaurantsMenuPhotos data={restaurant} />}
      {width <= 935 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0",
            alignItems: "center",
            flexDirection: width <= 625 ? "column" : "row",
            margin: "0",
          }}
        >
          <div style={{ margin: "0 10px 10px" }}>
            <MyRestaurantsGallaryPhotos data={restaurant} />
          </div>
          <div style={{ margin: "0 10px 10px" }}>
            <MyRestaurantsMenuPhotos data={restaurant} />{" "}
          </div>
        </div>
      )}
    </Box>
  );
}
