import React from "react";
import { Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useWindowDimensions from "./WindowResize";
import { useAuth } from "./AuthProvider";
import { db } from "../firebase";
export function MyRestaurantsGallaryPhotos(props) {
  const { userRestPhotos1, updater1, updaterAll1, currentUser } = useAuth();
  let profilePhotoSet = (ev) => {
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)
      .set({
        ...userRestPhotos1,
        [props.data.restName + props.data.address]: {
          avatar: props.data.photos.avatar,
          profilePicture: ev.target.id,
          menuPhotos: props.data.photos.menuPhotos,
        },
      });

    props.data.photos.profilePicture = ev.target.id;
    sessionStorage.setItem("restinfo", JSON.stringify(props.data));
    updater1();

    updaterAll1();
  };
  let deletePhotoAvatar = (ev) => {
    ev.preventDefault();
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)
      .set({
        ...userRestPhotos1,
        [props.data.restName + props.data.address]: {
          avatar: props.data.photos.avatar.filter((item, index) => {
            return index != ev.currentTarget.id;
          }),
          profilePicture:
            ev.currentTarget.id > props.data.photos.profilePicture
              ? props.data.photos.profilePicture
              : props.data.photos.profilePicture == 0
              ? props.data.photos.profilePicture
              : props.data.photos.profilePicture - 1,
          menuPhotos: props.data.photos.menuPhotos,
        },
      });

    updater1();
    updaterAll1();
    let avatars = props.data.photos.avatar.filter((item, index) => {
      return index != ev.currentTarget.id;
    });
    props.data.photos.avatar = avatars;
    if (ev.currentTarget.id < props.data.photos.profilePicture) {
      props.data.photos.profilePicture = props.data.photos.profilePicture - 1;
    }

    sessionStorage.setItem("restinfo", JSON.stringify(props.data));
  };

  const { width } = useWindowDimensions();
  return (
    <Paper
      style={{
        overflowY: "scroll",
        maxHeight: width <= 922 ? "400px" : "700px",
        padding: "20px",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", padding: "0", textAlign: "center" }}>
          Restaurant {props.data.restname} Gallary
        </h1>
        {props.data.photos.avatar.map((e, index) => {
          return (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                id={index}
                onClick={profilePhotoSet}
                style={{
                  width:
                    width <= 1258
                      ? width <= 1020
                        ? "230px"
                        : "280px"
                      : "350px",
                  height:
                    width <= 1258
                      ? width <= 1020
                        ? "100px"
                        : "140px"
                      : "200px",
                }}
                src={e}
                alt="img"
              />
              <DeleteIcon
                id={index}
                onClick={deletePhotoAvatar}
                style={{ color: "red", cursor: 'pointer'
              }}
              />
            </li>
          );
        })}
      </ul>
    </Paper>
  );
}

export function MyRestaurantsMenuPhotos(props) {
  const { userRestPhotos1, updater1, updaterAll1, currentUser } = useAuth();
  const { width } = useWindowDimensions();

  let deletePhotomenu = (ev) => {
    ev.preventDefault();
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)
      .set({
        ...userRestPhotos1,
        [props.data.restName + props.data.address]: {
          avatar: props.data.photos.avatar,
          profilePicture: props.data.photos.profilePicture || "0",
          menuPhotos: props.data.photos.menuPhotos.filter((item, index) => {
            return index != ev.currentTarget.id;
          }),
        },
      });
    let menus = props.data.photos.menuPhotos.filter((item, index) => {
      return index != ev.currentTarget.id;
    });
    props.data.photos.menuPhotos = menus;
    sessionStorage.setItem("restinfo", JSON.stringify(props.data));
    updater1();

    updaterAll1();
  };
  return (
    <Paper
      style={{
        overflowY: "scroll",
        maxHeight: width <= 922 ? "400px" : "700px",
        padding: "20px",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ padding: "0", margin: "0", textAlign: "center" }}>
          Restaurant {props.data.restname} Menu
        </h1>
        {props.data.photos.menuPhotos.map((e, index) => {
          return (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width:
                    width <= 1258
                      ? width <= 1020
                        ? "230px"
                        : "280px"
                      : "350px",
                  height:
                    width <= 1258
                      ? width <= 1020
                        ? "100px"
                        : "140px"
                      : "200px",
                }}
                src={e}
                alt="img"
              />
              <DeleteIcon
                id={index}
                style={{ color: "red",cursor: 'pointer'
              }}
                onClick={deletePhotomenu}
              />
            </li>
          );
        })}
      </ul>
    </Paper>
  );
}
